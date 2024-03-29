<?php

namespace App\Interfaces;

use App\Models\Voucher;

interface VoucherInterface
{
    public function getPaginated($request);
    public function getActive();
    public function getById(string $id);
    public function getByCode($request);
    public function create(array $data);
    public function update(Voucher $model, array $data);
    public function delete(Voucher $model);
}
