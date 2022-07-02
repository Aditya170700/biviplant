<?php

namespace App\Interfaces;

use App\Models\Origin;

interface OriginInterface
{
    public function getPaginated($request);
    public function getById(string $id);
    public function create(array $data);
    public function delete(Origin $model);
}
