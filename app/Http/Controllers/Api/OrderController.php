<?php

namespace App\Http\Controllers\Api;

use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Order as OrderService;

class OrderController extends Controller
{
    public function listPaymentMethod()
    {
        $body = ['biviplant'];
        $jsonBody = json_encode($body, JSON_UNESCAPED_SLASHES);
        $signature = OrderService::stringToSign($jsonBody, 'POST');
        $timestamp = Date('YmdHis');

        $ch = curl_init(config('ipaymu.url_payment_method'));

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

        if ($return->Status != 200) {
            throw new Exception('Gagal mendapatkan metode pembayaran, cobalah beberapa saat lagi', 500);
        }

        curl_close($ch);

        return response()->json([
            'status' => 200,
            'message' => 'List Payment Method',
            'data' => $return->Data
        ]);
    }
}
