<?php

return [
    'url_payment_direct' => env('IPAYMU_URL_PAYMENT_DIRECT') ?? 'https://sandbox.ipaymu.com/api/v2/payment/direct',
    'url_payment_method' => env('IPAYMU_URL_PAYMENT_METHOD') ?? 'https://sandbox.ipaymu.com/api/v2/payment-method-list',
    'url_return' => env('IPAYMU_URL_RETURN') ?? 'http://localhost:8000/order/return',
    'url_cancel' => env('IPAYMU_URL_CANCEL') ?? 'http://localhost:8000/order/cancel',
    'url_notify' => env('IPAYMU_URL_NOTIFY') ?? 'http://localhost:8000/order/notify',
    'va' => env('IPAYMU_VA') ?? '0000008812668976',
    'api_key' => env('IPAYMU_API_KEY') ?? 'SANDBOX26924A21-DAB0-4028-8A58-0B61F930229C',
];
