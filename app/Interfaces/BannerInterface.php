<?php

namespace App\Interfaces;

use App\Models\Banner;

interface BannerInterface
{
    public function getPaginated($request);
    public function getById(string $id);
    public function create(array $data);
    public function update(Banner $model, array $data);
    public function delete(Banner $model);
}
