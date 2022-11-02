<?php

namespace App\Repositories;

use App\Models\OrderDetail;
use App\Interfaces\OrderDetailInterface;

class OrderDetailRepository implements OrderDetailInterface
{
    public function __construct(OrderDetail $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        return $this->model
            ->create($data);
    }

    public function getById(string $id, $with = [])
    {
        return $this->model
            ->with([
                'user_address' => function ($query) {
                    $query->select('id', 'subdistrict_id', 'postal_code', 'detail', 'receiver', 'phone', 'latitude', 'longitude')
                        ->with([
                            'subdistrict' => function ($query) {
                                $query->select('id', 'city_id', 'name')
                                    ->with([
                                        'city' => function ($query) {
                                            $query->select('id', 'province_id', 'name')
                                                ->with([
                                                    'province' => function ($query) {
                                                        $query->select('id', 'name');
                                                    }
                                                ]);
                                        }
                                    ]);
                            },
                        ]);
                },
                'product.files',
                ...$with,
            ])
            ->findOrFail($id);
    }

    public function updateReceipt($request, OrderDetail $model)
    {
        return $model->update([
            'receipt' => $request->receipt,
        ]);
    }

    public function checkReceipt(string $orderId)
    {
        return $this->model
            ->where('order_id', $orderId)
            ->whereNull('receipt')
            ->exists();
    }
}
