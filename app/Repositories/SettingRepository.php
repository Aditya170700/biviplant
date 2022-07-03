<?php

namespace App\Repositories;

use App\Models\Setting;
use App\Interfaces\SettingInterface;

class SettingRepository implements SettingInterface
{
    public function __construct(Setting $model)
    {
        $this->model = $model;
    }

    public function getOne()
    {
        return $this->model
            ->first();
    }

    public function create(array $data)
    {
        return $this->model
            ->create($data);
    }

    public function update(Setting $model, array $data)
    {
        return $model->update($data);
    }
}
