<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Jobs\NewOrderJob;
use Illuminate\Http\Request;
use App\Interfaces\CartInterface;
use App\Interfaces\OrderInterface;
use Illuminate\Support\Facades\DB;
use App\Services\Order as OrderService;
use App\Interfaces\OrderDetailInterface;
use App\Http\Requests\Front\Order\StoreRequest;
use App\Jobs\FinishJob;
use Illuminate\Support\Facades\Log;

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
            $requestBody = strtolower(hash('sha256', $jsonBody));
            $stringToSign = strtoupper('POST') . ':0000008812668976:' . $requestBody . ':SANDBOX26924A21-DAB0-4028-8A58-0B61F930229C';
            $signature = hash_hmac('sha256', $stringToSign, 'SANDBOX26924A21-DAB0-4028-8A58-0B61F930229C');
            $timestamp = Date('YmdHis');

            $ch = curl_init(config('ipaymu.url_payment_direct'));

            $headers = [
                'Accept: application/json',
                'Content-Type: application/json',
                'va: 0000008812668976',
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
                Log::error(config('ipaymu.url_return'));
                Log::error(config('ipaymu.url_cancel'));
                Log::error(config('ipaymu.url_notify'));
                Log::error(config('ipaymu.url_payment_direct'));
                Log::error(config('ipaymu.va'));
                Log::error(config('ipaymu.api_key'));
                Log::error($return->Status);
                Log::error($err);
                Log::error(json_encode($return));
                throw new Exception('Gagal melakukan pembayaran, cobalah beberapa saat lagi', 500);
            }

            $uuid = generateUuid();
            $this->orderInterface->create([
                'id' => $uuid,
                'user_id' => auth()->user()->id,
                'total' => $request->total['res'],
                'voucher_code' => $request->voucher_code,
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

            dispatch(new NewOrderJob($this->orderInterface->getById($uuid)));
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

    public function finish(string $id)
    {
        try {
            $order = $this->orderInterface->getById($id);

            if ($order->payment_status != 'Dikirim') {
                throw new Exception('Order belum dibayar', 422);
            }

            $this->orderInterface->updateStatus('Selesai', $order);

            dispatch(new FinishJob($order));

            return redirect()->back()->with('success', 'Pesanan selesai');
        } catch (\Throwable $th) {
            panic($th);
        }
    }
}
