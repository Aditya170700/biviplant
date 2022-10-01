<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Order as OrderService;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function listPaymentMethod()
    {
        $url = "https://sandbox.ipaymu.com/api/v2/payment-method-list";
        $method = 'POST';

        $body = ['biviplant'];

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

        return response()->json([
            'status' => 200,
            'message' => 'List Payment Method',
            'data' => $return->Data
        ]);
    }
}
