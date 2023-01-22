<?php

namespace App\Repositories;

use App\Models\Origin;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
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
            ->with('files')
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', "%$request->search%");
            })
            ->when($request->category, function ($query) use ($request) {
                $query->whereHas('category', function ($query) use ($request) {
                    $query->where('name', $request->category);
                });
            })
            ->when($request->categories, function ($query) use ($request) {
                $query->whereHas('category', function ($query) use ($request) {
                    $query->whereIn('name', $request->categories);
                });
            })
            ->when($request->conditions, function ($query) use ($request) {
                $query->whereIn('condition', $request->conditions);
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

    public function featuredProducts($condition = null)
    {
        return $this->model
            ->with('files', 'category')
            ->where('is_featured', Product::FEATURED)
            ->when($condition, function ($query) use ($condition) {
                $query->where('condition', $condition);
            })
            ->paginate(10);
    }

    public function getById(string $id, array $with = [])
    {
        return $this->model
            ->with($with)
            ->findOrFail($id);
    }

    public function getBestSeller($request)
    {
        return $this->model
            ->leftJoin('order_details', 'products.id', '=', 'order_details.product_id')
            ->select(
                'products.id',
                'products.slug',
                'products.name',
                'products.price',
                'products.strike_price',
                DB::raw('COALESCE(sum(order_details.qty),0) as total'),
                DB::raw('CONCAT("' . config('app.url') . '/", (select path from files where product_id = products.id limit 1)) as thumbnail')
            )
            ->groupBy(
                'products.id',
                'products.slug',
                'products.name',
                'products.price',
                'products.strike_price'
            )
            ->orderBy('total', 'desc')
            ->take(10)
            ->get();
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
