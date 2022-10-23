<?php

namespace App\Repositories;

use App\Models\Order;
use App\Interfaces\OrderInterface;

class OrderRepository implements OrderInterface
{
    public function __construct(Order $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        return $this->model
            ->create($data);
    }

    public function getByUser($request, string $id)
    {
        return $this->model
            ->where('user_id', $id)
            ->with([
                'order_details' => function ($query) {
                    $query->with([
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
                    ]);
                },
            ])
            ->when($request->status, function ($query) use ($request) {
                $query->where('payment_status', $request->status);
            })
            ->paginate(10)
            ->withQueryString();
    }

    public function getById(string $id)
    {
        return $this->model
            ->with([
                'order_details' => function ($query) {
                    $query->with([
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
                    ]);
                },
                'user',
            ])
            ->findOrFail($id);
    }

    public function getByTrxId(string $trxId)
    {
        return $this->model
            ->with('user')
            ->where('payment_id', $trxId)
            ->firstOrFail();
    }

    public function updateStatus(string $status, Order $model)
    {
        return $model->update([
            'payment_status' => $status,
        ]);
    }

    public function getPaginated($request)
    {
        return $this->model
            ->with([
                'order_details.product',
                'user'
            ])
            ->when($request->search, function ($query) use ($request) {
                $query->whereHas('user', function ($query) use ($request) {
                    $query->where('name', 'like', '%' . $request->search . '%');
                });
            })
            ->withCount('order_details')
            ->latest()
            ->paginate($request->limit ?? 25);
    }
}
