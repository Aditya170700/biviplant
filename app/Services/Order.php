<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class Order
{
    public static function stringToSign($jsonBody, $method)
    {
        $requestBody = strtolower(hash('sha256', $jsonBody));
        $stringToSign = strtoupper($method) . ':' . config('ipaymu.va') . ':' . $requestBody . ':' . config('ipaymu.api_key');

        return hash_hmac('sha256', $stringToSign, config('ipaymu.api_key'));
    }
}
