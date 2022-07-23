<?php

namespace App\Classes\Adapters\Front\UserAddress;

use App\Classes\Adapters\DataRequestAdapterInterface;

class UserAddressRequestAdapter implements DataRequestAdapterInterface
{
    public static function rulesCreated(): array
    {
        return [
            'subdistrict_id' => 'required',
            'longitude' => 'required',
            'latitude' => 'required',
            'receiver' => 'required|string|max:255',
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
            'subdistrict_id' => $data['subdistrict_id'],
            'longitude' => $data['longitude'],
            'latitude' => $data['latitude'],
            'receiver' => $data['receiver'],
            'phone' => $data['phone'],
            'postal_code' => $data['postal_code'],
            'detail' => $data['detail'],
            'user_id' => $data['user_id'],
        ];
    }

    public static function attributes(): array
    {
        return [
            'subdistrict_id' => 'Kecamatan',
            'longitude' => 'Longitude',
            'latitude' => 'Latitude',
            'receiver' => 'Nama Penerima',
            'phone' => 'No HP',
            'postal_code' => 'Kode Pos',
            'detail' => 'Detail Alamat',
        ];
    }
}
