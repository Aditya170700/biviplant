<?php

namespace App\Interfaces;

use App\Models\Order;

interface OrderInterface
{
    public function create(array $data);
}
