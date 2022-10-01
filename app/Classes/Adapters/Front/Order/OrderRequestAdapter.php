<?php

namespace App\Classes\Adapters\Front\Order;

use App\Classes\Adapters\DataRequestAdapterInterface;

class OrderRequestAdapter implements DataRequestAdapterInterface
{
    public static function rulesCreated(): array
    {
        return [
            'carts' => 'required',
            'payment_method' => 'required',
            'total' => 'required',
        ];
    }

    public static function rulesUpdated($id): array
    {
        return [];
    }

    public static function transform($data)
    {
        return [
            'carts' => $data['carts'],
            'payment_method' => $data['payment_method'],
            'voucher' => $data['voucher'],
            'total' => $data['total'],
        ];
    }

    public static function attributes(): array
    {
        return [
            'carts' => 'Keranjang',
            'payment_method' => 'Metode pembayaran',
            'voucher' => 'Voucher',
            'total' => 'Total',
        ];
    }
}
