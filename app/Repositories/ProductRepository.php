<?php

namespace App\Repositories;

use App\Models\Product;
use App\Interfaces\ProductInterface;

class ProductRepository implements ProductInterface
{
    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function getPaginated($request)
    {
        return $this->model
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', "%$request->search%");
            })
            ->when($request->field && $request->direction, function ($query) use ($request) {
                $query->orderBy($request->field, $request->direction);
            })
            ->when(!$request->field || !$request->direction, function ($query) use ($request) {
                $query->latest();
            })
            ->paginate($request->limit ?? 25);
    }

    public function featuredProducts()
    {
        return $this->model
            ->with('files')
            ->paginate(10);
    }

    public function getById(string $id, array $with = [])
    {
        return $this->model
            ->with($with)
            ->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->model
            ->create($data);
    }

    public function update(Product $model, array $data)
    {
        return $model->update($data);
    }

    public function delete(Product $model)
    {
        return $model->delete();
    }
}
