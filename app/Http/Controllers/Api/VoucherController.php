<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Interfaces\VoucherInterface;

class VoucherController extends Controller
{
    public function __construct(Request $request, VoucherInterface $voucherInterface)
    {
        $this->request = $request;
        $this->voucherInterface = $voucherInterface;
    }

    public function check()
    {
        $voucher = $this->voucherInterface->getByCode($this->request);

        if (!$voucher) {
            throw new \Exception("Voucher tidak ditemukan", 404);
        }

        if ($voucher->orders_count >= $voucher->limit) {
            throw new \Exception("Voucher sudah habis", 404);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Voucher',
            'data' => $voucher,
        ]);
    }
}
