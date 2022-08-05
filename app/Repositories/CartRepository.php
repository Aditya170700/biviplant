<?php

namespace App\Repositories;

use App\Models\Cart;
use App\Interfaces\CartInterface;

class CartRepository implements CartInterface
{
    public function __construct(Cart $model)
    {
        $this->model = $model;
    }

    public function getByUser()
    {
        return $this->model
            ->where('user_id', auth()->id())
            ->with([
                'product' => function ($query) {
                    $query->select('id', 'name', 'price', 'strike_price')
                        ->with([
                            'category' => function ($query) {
                                $query->select('name');
                            },
                            'files' => function ($query) {
                                $query->select('path');
                            }
                        ]);
                }
            ])
            ->latest()
            ->get();
    }

    public function getById(string $id)
    {
        return $this->model
            ->findOrFail($id);
    }

    public function getByProductUser(string $productId, string $userId)
    {
        return $this->model
            ->where('product_id', $productId)
            ->where('user_id', $userId)
            ->firstOrFail();
    }

    public function create(array $data)
    {
        return $this->model
            ->create($data);
    }

    public function update(Cart $model, array $data)
    {
        return $model->update($data);
    }

    public function delete(Cart $model)
    {
        return $model->delete();
    }
}
