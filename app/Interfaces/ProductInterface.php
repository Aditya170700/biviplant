<?php

namespace App\Interfaces;

use App\Models\Origin;
use App\Models\Product;

interface ProductInterface
{
    public function getPaginated($request);
    public function featuredProducts();
    public function getById(string $id);
    public function getBestSeller($request);
    public function search(string $keyword);
    public function create(array $data);
    public function update(Product $model, array $data);
    public function attachOrigins(Product $model, Origin $origin);
    public function detachOrigins(Product $model, Origin $origin);
    public function delete(Product $model);
}
