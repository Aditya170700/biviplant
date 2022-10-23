<?php

namespace App\Interfaces;

use App\Models\Order;

interface RatingInterface
{
    public function create(array $data);
}
