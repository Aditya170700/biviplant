<?php

namespace App\Interfaces;

use App\Models\Order;

interface OrderInterface
{
    public function create(array $data);
    public function getByUser($request, string $id);
    public function getById(string $id);
    public function getByTrxId(string $trxId);
    public function updateStatus(string $status, Order $model);
    public function getPaginated($request);
}
