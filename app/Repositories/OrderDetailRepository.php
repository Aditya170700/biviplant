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
}
