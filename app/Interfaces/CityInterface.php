<?php

namespace App\Interfaces;

use App\Models\Province;

interface CityInterface
{
    public function getAll(Province $province);
    public function getById(string $id);
}
