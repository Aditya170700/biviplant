<?php

namespace App\Interfaces;

use App\Models\OrderDetail;

interface OrderDetailInterface
{
    public function create(array $data);
    public function getById(string $id, $with = []);
    public function updateReceipt($request, OrderDetail $model);
    public function checkReceipt(string $orderId);
}
