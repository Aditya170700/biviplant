<?php

namespace App\Interfaces;

use App\Models\Category;

interface CategoryInterface
{
    public function getPaginated($request);
    public function getAll($request);
    public function getById(string $id);
    public function create(array $data);
    public function update(Category $model, array $data);
    public function delete(Category $model);
}
