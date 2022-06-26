<?php

namespace App\Repositories;

use App\Models\Voucher;
use App\Interfaces\VoucherInterface;

class VoucherRepository implements VoucherInterface
{
    public function __construct(Voucher $model)
    {
        $this->model = $model;
    }

    public function getPaginated($request)
    {
        return $this->model
            ->when($request->search, function ($query) use ($request) {
                $query->where('code', 'like', "%$request->search%");
            })
            ->when($request->field && $request->direction, function ($query) use ($request) {
                $query->orderBy($request->field, $request->direction);
            })
            ->when(!$request->field || !$request->direction, function ($query) use ($request) {
                $query->latest();
            })
            ->paginate($request->limit ?? 25);
    }

    public function getById(string $id)
    {
        return $this->model
            ->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->model
            ->create($data);
    }

    public function update(Voucher $model, array $data)
    {
        return $model->update($data);
    }

    public function delete(Voucher $model)
    {
        return $model->delete();
    }
}
