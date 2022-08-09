<?php

namespace App\Repositories;

use App\Models\Origin;
use App\Interfaces\OriginInterface;
use Illuminate\Support\Facades\DB;

class OriginRepository implements OriginInterface
{
    public function __construct(Origin $model)
    {
        $this->model = $model;
    }

    public function getPaginated($request, array $with = [])
    {
        return $this->model
            ->with($with)
            ->when($request->search, function ($query) use ($request) {
                $query->where('sender', 'like', "%$request->search%");
            })
            ->when($request->field && $request->direction, function ($query) use ($request) {
                $query->orderBy($request->field, $request->direction);
            })
            ->when(!$request->field || !$request->direction, function ($query) {
                $query->latest();
            })
            ->paginate($request->limit ?? 25);
    }

    public function getAll(array $with = [])
    {
        return $this->model
            ->with($with)
            ->get();
    }

    public function getById(string $id, array $with = [])
    {
        return $this->model
            ->with($with)
            ->findOrFail($id);
    }

    public function getNearest(string $lat, string $lng, string $productId)
    {
        return $this->model
            ->with('subdistrict')
            ->select(
                "origins.id",
                "origins.subdistrict_id",
                "origins.latitude",
                "origins.longitude",
                "origins.sender",
                "origins.phone",
                "origins.postal_code",
                "origins.detail",
                DB::raw("6371 * acos(cos(radians({$lat}))
                        * cos(radians(origins.latitude))
                        * cos(radians(origins.longitude) - radians({$lng}))
                        + sin(radians({$lat}))
                        * sin(radians(origins.latitude))) AS distance")
            )
            ->whereHas('products', function ($q) use ($productId) {
                $q->where('product_id', $productId);
            })
            ->orderBy('distance')
            ->first();
    }

    public function create(array $data)
    {
        return $this->model
            ->create($data);
    }

    public function delete(Origin $model)
    {
        return $model->delete();
    }
}
