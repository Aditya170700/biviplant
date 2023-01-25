<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class Order
{
    public static function stringToSign($jsonBody, $method)
    {
        // $requestBody = strtolower(hash('sha256', $jsonBody));
        // $stringToSign = strtoupper($method) . ':' . config('ipaymu.va') . ':' . $requestBody . ':' . config('ipaymu.api_key');

        // return hash_hmac('sha256', $stringToSign, config('ipaymu.api_key'));
        $requestBody = strtolower(hash('sha256', $jsonBody));
        $stringToSign = strtoupper($method) . ':0000008812668976:' . $requestBody . ':SANDBOX26924A21-DAB0-4028-8A58-0B61F930229C';

        return hash_hmac('sha256', $stringToSign, 'SANDBOX26924A21-DAB0-4028-8A58-0B61F930229C');
    }
}
