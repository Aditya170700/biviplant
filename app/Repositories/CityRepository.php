<?php

namespace App\Repositories;

use App\Models\City;
use App\Interfaces\CityInterface;
use App\Models\Province;

class CityRepository implements CityInterface
{
    public function __construct(City $model)
    {
        $this->model = $model;
    }

    public function getAll(Province $province)
    {
        return $this->model
            ->where('province_id', $province->id)
            ->get();
    }

    public function getById(string $id)
    {
        return $this->model
            ->findOrFail($id);
    }
}
