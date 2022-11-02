<?php

namespace App\Classes\Adapters\Front\Cart;

use App\Classes\Adapters\DataRequestAdapterInterface;

class CartRequestAdapter implements DataRequestAdapterInterface
{
    public static function rulesCreated(): array
    {
        return [
            'user_id' => 'required',
            'product_id' => 'required',
            'user_address_id' => 'required',
            'qty' => 'required',
            // 'courier' => 'required',
            // 'shipping_service' => 'required',
            // 'shipping_cost' => 'required',
            // 'shipping_etd' => 'required',
        ];
    }

    public static function rulesUpdated($id): array
    {
        return [
            'user_id' => 'required',
            'product_id' => 'required',
            'user_address_id' => 'required',
            'qty' => 'required',
            // 'courier' => 'required',
            // 'shipping_service' => 'required',
            // 'shipping_cost' => 'required',
            // 'shipping_etd' => 'required',
        ];
    }

    public static function transform($data)
    {
        return [
            'user_id' => $data['user_id'],
            'product_id' => $data['product_id'],
            'user_address_id' => $data['user_address_id'],
            'qty' => $data['qty'],
            'courier' => $data['courier'] ?? null,
            'shipping_service' => $data['shipping_service'] ?? null,
            'shipping_cost' => $data['shipping_cost'] ?? null,
            'shipping_etd' => $data['shipping_etd'] ?? null,
        ];
    }

    public static function attributes(): array
    {
        return [
            'user_id' => 'ID User',
            'product_id' => 'ID Produk',
            'user_address_id' => 'Alamat Pengiriman',
            'qty' => 'Jumlah',
            'courier' => 'Kurir',
            'shipping_service' => 'Jenis Pengiriman',
            'shipping_cost' => 'Ongkir',
            'shipping_etd' => 'Estimasi',
        ];
    }
}
