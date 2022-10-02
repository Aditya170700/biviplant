<?php

return [
    'key' => env('API_KEY_RO') ?? '',
    'cost_url' => env('COST_URL_RO') ?? 'https://pro.rajaongkir.com/api/cost',
    'track_url' => env('TRACK_URL_RO') ?? 'https://pro.rajaongkir.com/api/waybill',
];
