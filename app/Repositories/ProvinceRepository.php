<?php

namespace App\Repositories;

use App\Models\Province;
use App\Interfaces\ProvinceInterface;

class ProvinceRepository implements ProvinceInterface
{
    public function __construct(Province $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        return $this->model
            ->all();
    }

    public function getById(string $id)
    {
        return $this->model
            ->findOrFail($id);
    }
}
