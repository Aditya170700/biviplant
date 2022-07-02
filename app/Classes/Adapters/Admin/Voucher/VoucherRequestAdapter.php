<?php

namespace App\Classes\Adapters\Admin\Voucher;

use App\Classes\Adapters\DataRequestAdapterInterface;

class VoucherRequestAdapter implements DataRequestAdapterInterface
{

    public static function rulesCreated(): array
    {
        return [
            'code' => 'required|string|max:255',
            'desc' => 'required|string|max:255',
            'limit' => 'required|integer',
            'expired_at' => 'required|date',
            'min_order' => 'required|integer|min:1',
            'discount' => 'required|integer|min:1|lt:max_discount',
            'max_discount' => 'required|integer|min:1|gt:discount'
        ];
    }

    public static function rulesUpdated($id): array
    {
        return [
            'code' => 'required|string|max:255',
            'desc' => 'required|string|max:255',
            'limit' => 'required|integer',
            'expired_at' => 'required|date',
            'min_order' => 'required|integer|min:1',
            'discount' => 'required|integer|min:1|lt:max_discount',
            'max_discount' => 'required|integer|min:1|gt:discount'
        ];
    }

    public static function transform($data)
    {
        return [
            'code' => $data['code'],
            'desc' => $data['desc'],
            'limit' => $data['limit'],
            'expired_at' => $data['expired_at'],
            'min_order' => $data['min_order'],
            'discount' => $data['discount'],
            'max_discount' => $data['max_discount']
        ];
    }

    public static function attributes(): array
    {
        return [
            'code' => 'Kode',
            'desc' => 'Deskripsi',
            'limit' => 'Batas',
            'min_order' => 'Minimal Order',
            'expired_at' => 'Tanggal Berakhir Voucher',
            'discount' => 'Diskon',
            'max_discount' => 'Maksimal Diskon'
        ];
    }
}
