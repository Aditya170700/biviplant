<?php

namespace App\Interfaces;

interface ProvinceInterface
{
    public function getAll();
    public function getById(string $id);
}
