<?php

namespace App\Repositories;

use App\Models\Subdistrict;
use App\Interfaces\SubdistrictInterface;
use App\Models\City;

class SubdistrictRepository implements SubdistrictInterface
{
    public function __construct(Subdistrict $model)
    {
        $this->model = $model;
    }

    public function getAll(City $city)
    {
        return $this->model
            ->where('city_id', $city->id)
            ->get();
    }

    public function getById(string $id)
    {
        return $this->model
            ->findOrFail($id);
    }
}
