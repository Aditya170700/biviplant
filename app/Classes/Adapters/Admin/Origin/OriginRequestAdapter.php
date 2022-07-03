<?php

namespace App\Classes\Adapters\Admin\Origin;

use App\Classes\Adapters\DataRequestAdapterInterface;

class OriginRequestAdapter implements DataRequestAdapterInterface
{
    public static function rulesCreated(): array
    {
        return [
            'product_id' => 'required|string',
            'subdistrict_id' => 'required',
            'longitude' => 'required',
            'latitude' => 'required',
            'sender' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'postal_code' => 'required|string|max:6',
            'detail' => 'required|string',
        ];
    }

    public static function rulesUpdated($id): array
    {
        return [];
    }

    public static function transform($data)
    {
        return [
            'product_id' => $data['product_id'],
            'subdistrict_id' => $data['subdistrict_id'],
            'longitude' => $data['longitude'],
            'latitude' => $data['latitude'],
            'sender' => $data['sender'],
            'phone' => $data['phone'],
            'postal_code' => $data['postal_code'],
            'detail' => $data['detail'],
        ];
    }

    public static function attributes(): array
    {
        return [
            'product_id' => 'Produk',
            'subdistrict_id' => 'Kecamatan',
            'longitude' => 'Longitude',
            'latitude' => 'Latitude',
            'sender' => 'Nama Pengirim',
            'phone' => 'No HP',
            'postal_code' => 'Kode Pos',
            'detail' => 'Detail Alamat',
        ];
    }
}
