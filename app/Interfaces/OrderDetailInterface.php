<?php

namespace App\Interfaces;

use App\Models\OrderDetail;

interface OrderDetailInterface
{
    public function create(array $data);
}