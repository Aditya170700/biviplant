<?php

namespace App\Http\Controllers;

use App\Http\Requests\Front\Order\StoreRequest;
use App\Interfaces\CartInterface;
use App\Interfaces\OrderDetailInterface;
use App\Interfaces\OrderInterface;
use App\Services\Order as OrderService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function __construct(Request $request, OrderInterface $orderInterface, OrderDetailInterface $orderDetailInterface, CartInterface $cartInterface)
    {
        $this->request = $request;
        $this->orderInterface = $orderInterface;
        $this->orderDetailInterface = $orderDetailInterface;
        $this->cartInterface = $cartInterface;
    }

    public function store(StoreRequest $request)
    {
        try {
            DB::beginTransaction();

            $body['paymentMethod'] = $request->payment_method['paymentMethod'];
            $body['paymentChannel'] = $request->payment_method['paymentChannel'];
            $body['name'] = auth()->user()->name;
            $body['phone'] = auth()->user()->phone ?? "";
            $body['email'] = auth()->user()->email;
            $body['amount'] = $request->total['res'];
            $body['returnUrl'] = config('ipaymu.url_return');
            $body['cancelUrl'] = config('ipaymu.url_cancel');
            $body['notifyUrl'] = config('ipaymu.url_notify');

            $jsonBody = json_encode($body, JSON_UNESCAPED_SLASHES);
            $signature = OrderService::stringToSign($jsonBody, 'POST');
            $timestamp = Date('YmdHis');

            $ch = curl_init(config('ipaymu.url_payment_direct'));

            $headers = [
                'Accept: application/json',
                'Content-Type: application/json',
                'va: ' . config('ipaymu.va'),
                'signature: ' . $signature,
                'timestamp: ' . $timestamp
            ];

            curl_setopt($ch, CURLOPT_HEADER, false);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

            curl_setopt($ch, CURLOPT_POST, count($body));
            curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonBody);

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
            $err = curl_error($ch);

            $return = json_decode(curl_exec($ch));

            curl_close($ch);

            if ($return->Status != 200) {
                throw new Exception('Gagal melakukan pembayaran, cobalah beberapa saat lagi', 500);
            }

            $uuid = generateUuid();
            $this->orderInterface->create([
                'id' => $uuid,
                'user_id' => auth()->user()->id,
                'total' => $request->total['res'],
                'voucher' => $request->voucher,
                'pg_fee' => $request->payment_method['fee'],
                'pg_fee_type' => $request->payment_method['feeType'],
                'payment_method' => $request->payment_method['paymentMethod'],
                'payment_channel' => $request->payment_method['paymentChannel'],
                'payment_id' => $return->Data->TransactionId,
                'payment_no' => $return->Data->PaymentNo,
                'payment_name' => $return->Data->PaymentName,
                'payment_expired' => $return->Data->Expired,
            ]);

            foreach ($request->carts as $cart) {
                $cart = $this->cartInterface->getById($cart['id']);

                $this->orderDetailInterface->create([
                    'product_id' => $cart['product_id'],
                    'user_address_id' => $cart['user_address_id'],
                    'order_id' => $uuid,
                    'courier' => $cart['courier'],
                    'shipping_service' => $cart['shipping_service'],
                    'shipping_cost' => $cart['shipping_cost'],
                    'shipping_etd' => $cart['shipping_etd'],
                    'qty' => $cart['qty'],
                    'price' => $cart['product']['price'],
                    'strike_price' => $cart['product']['strike_price'],
                ]);

                $this->cartInterface->delete($cart);
            }

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return redirect()->route('orders.detail', $uuid)->with('success', 'Order berhasil');
    }

    public function history()
    {
        try {
            return Inertia::render('Order/History', [
                'order' => $this->orderInterface->getByUser($this->request, auth()->user()->id),
                'status' => $this->request->status,
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function detail(string $id)
    {
        try {
            return Inertia::render('Order/Detail', [
                'order' => $this->orderInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function track(string $id)
    {
        try {
            return Inertia::render('Order/Track', [
                'order_detail' => $this->orderDetailInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }
}
