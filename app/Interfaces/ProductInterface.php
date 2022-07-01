<?php

namespace App\Interfaces;

use App\Models\Product;

interface ProductInterface
{
    public function getPaginated($request);
    public function getById(string $id);
    public function create(array $data);
    public function update(Product $model, array $data);
    public function delete(Product $model);
}
