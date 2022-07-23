<?php

namespace App\Repositories;

use App\Models\UserAddress;
use App\Interfaces\UserAddressInterface;

class UserAddressRepository implements UserAddressInterface
{
    public function __construct(UserAddress $model)
    {
        $this->model = $model;
    }

    public function getPaginated($request, $with = [])
    {
        return $this->model
            ->when($request->search, function ($query) use ($request) {
                $query->where('receiver', 'like', "%$request->search%")
                    ->orWhere('detail', 'like', "%$request->search%")
                    ->orWhere('phone', 'like', "%$request->search%");
            })
            ->orderBy('is_primary', 'desc')
            ->when($request->field && $request->direction, function ($query) use ($request) {
                $query->orderBy($request->field, $request->direction);
            })
            ->when(!$request->field || !$request->direction, function ($query) use ($request) {
                $query->latest();
            })
            ->with($with)
            ->paginate($request->limit ?? 25);
    }

    public function getById(string $id, $with = [])
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

    public function update(UserAddress $model, array $data)
    {
        return $model->update($data);
    }

    public function getPrimary()
    {
        return $this->model
            ->with('subdistrict.city.province')
            ->where('user_id', auth()->user()->id)
            ->where('is_primary', 1)
            ->first();
    }

    public function makePrimary(UserAddress $model)
    {
        return $model->update([
            'is_primary' => !$model->is_primary ? 1 : 0,
        ]);
    }

    public function makeNotPrimary(UserAddress $model)
    {
        return $this->model
            ->where('id', '!=', $model->id)
            ->update([
                'is_primary' => 0,
            ]);
    }

    public function delete(UserAddress $model)
    {
        return $model->delete();
    }
}
