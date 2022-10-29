<?php

namespace App\Interfaces;

use App\Models\Order;

interface RatingInterface
{
    public function getPaginated($request);
    public function create(array $data);
}
