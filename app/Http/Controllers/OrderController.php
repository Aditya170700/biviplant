<?php

namespace App\Http\Controllers;

use App\Services\Order as OrderService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function history()
    {
        try {
            return Inertia::render('Order/History');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function detail(string $id)
    {
        try {
            return Inertia::render('Order/Detail');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function track(string $id)
    {
        try {
            return Inertia::render('Order/Track');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function store(Request $request)
    {
        $url = "https://sandbox.ipaymu.com/api/v2/payment/direct";
        $method = 'POST';

        $body['paymentMethod'] = 'va';
        $body['paymentChannel'] = 'mandiri';
        $body['name'] = "Aditya";
        $body['phone'] = "089182736453";
        $body['email'] = "adityaric72@gmail.com";
        $body['amount'] = 1000000;
        $body['returnUrl'] = "http://localhost:8000/order/return";
        $body['cancelUrl'] = "http://localhost:8000/order/cancel";
        $body['notifyUrl'] = "http://localhost:8000/order/notify";

        $jsonBody = json_encode($body, JSON_UNESCAPED_SLASHES);
        $signature = OrderService::stringToSign($jsonBody, $method);
        $timestamp = Date('YmdHis');

        $ch = curl_init($url);

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

        dd($return);
    }
}
