<?php

namespace App\Interfaces;

use App\Models\Setting;

interface SettingInterface
{
    public function getOne();
    public function create(array $data);
    public function update(Setting $model, array $data);
}
