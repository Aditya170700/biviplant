<?php

namespace App\Interfaces;

use App\Models\City;

interface SubdistrictInterface
{
    public function getAll(City $city);
    public function getById(string $id);
}
