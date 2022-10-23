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

    public function create(array $data)
    {
        return $this->model
            ->insert($data);
    }
}
