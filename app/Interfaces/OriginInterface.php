<?php

namespace App\Interfaces;

use App\Models\Origin;

interface OriginInterface
{
    public function getPaginated($request);
    public function getAll();
    public function getById(string $id);
    public function getNearest(string $lat, string $lng, string $productId);
    public function create(array $data);
    public function delete(Origin $model);
}
