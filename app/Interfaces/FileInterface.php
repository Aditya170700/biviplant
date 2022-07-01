<?php

namespace App\Interfaces;

use App\Models\File;

interface FileInterface
{
    public function getPaginated($request);
    public function getById(string $id);
    public function create(array $data);
    public function delete(File $model);
}
