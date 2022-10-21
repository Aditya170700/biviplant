<?php

namespace App\Repositories;

use App\Models\Product;
use App\Interfaces\ProductInterface;
use App\Models\Origin;

class ProductRepository implements ProductInterface
{
    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function getPaginated($request)
    {
        return $this->model
            ->with('files')
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', "%$request->search%");
            })
            ->when($request->categories, function ($query) use ($request) {
                $query->whereHas('category', function ($query) use ($request) {
                    $query->whereIn('name', $request->categories);
                });
            })
            ->when($request->sort_price, function ($query) use ($request) {
                $query->orderBy('price', $request->sort_price);
            })
            ->when($request->field && $request->direction, function ($query) use ($request) {
                $query->orderBy($request->field, $request->direction);
            })
            ->when(!$request->field || !$request->direction || !$request->sort_price, function ($query) use ($request) {
                $query->latest();
            })
            ->paginate($request->limit ?? 25);
    }

    public function featuredProducts()
    {
        return $this->model
            ->with('files', 'category')
            ->paginate(10);
    }

    public function getById(string $id, array $with = [])
    {
        return $this->model
            ->with($with)
            ->findOrFail($id);
    }

    public function search(string $keyword)
    {
        return $this->model
            ->search($keyword)
            ->get();
    }

    public function getRelatedProducts(string $idCategory, $exceptProductId)
    {
        return $this->model
            ->with('files', 'category')
            ->where('category_id', $idCategory)
            ->where('id', '!=', $exceptProductId)
            ->limit(5)
            ->get();
    }

    public function findBySlug($slug, $with = [])
    {
        return $this->model
            ->with($with)
            ->where('slug', $slug)
            ->first();
    }

    public function getBySlugCategory($slug)
    {
        return $this->model
            ->with('files', 'category')
            ->whereHas('category', function ($q) use ($slug) {
                $q->where('slug', $slug);
            })
            ->paginate(25);
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

    public function attachOrigins(Product $model, Origin $origin)
    {
        return $model->origins()->attach($origin->id);
    }

    public function detachOrigins(Product $model, Origin $origin)
    {
        return $model->origins()->detach($origin->id);
    }

    public function delete(Product $model)
    {
        return $model->delete();
    }
}
