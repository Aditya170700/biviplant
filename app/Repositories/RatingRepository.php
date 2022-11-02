<?php

namespace App\Repositories;

use App\Models\Feedback;
use App\Interfaces\RatingInterface;

class RatingRepository implements RatingInterface
{
    public function __construct(Feedback $model)
    {
        $this->model = $model;
    }

    public function getPaginated($productId)
    {
        return $this->model
            ->where('product_id', $productId)
            ->with('user')
            ->latest()
            ->paginate(25);
    }

    public function create(array $data)
    {
        return $this->model
            ->insert($data);
    }
}
