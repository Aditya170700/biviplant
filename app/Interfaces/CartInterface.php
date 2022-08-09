<?php

namespace App\Interfaces;

use App\Models\Cart;

interface CartInterface
{
    public function getByUser();
    public function getById(string $id);
    public function getByProductUser(string $productId, string $userId);
    public function create(array $data);
    public function update(Cart $model, array $data);
    public function delete(Cart $model);
}
