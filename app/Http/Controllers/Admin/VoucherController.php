<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Voucher\StoreRequest;
use App\Http\Requests\Admin\Voucher\UpdateRequest;
use App\Interfaces\VoucherInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VoucherController extends Controller
{
    public function __construct(Request $request, VoucherInterface $voucherInterface)
    {
        $this->request = $request;
        $this->voucherInterface = $voucherInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Dashboard/Voucher/Index', [
                'results' => $this->voucherInterface->getPaginated($this->request),
                'filters' => $this->request->all(['search', 'field', 'direction', 'limit']),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function create()
    {
        try {
            return Inertia::render('Dashboard/Voucher/Create');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $this->voucherInterface
                ->create($request->data());

            return redirect()->route('admin.vouchers.index')
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function edit($id)
    {
        try {
            return Inertia::render('Dashboard/Voucher/Edit', [
                'result' => $this->voucherInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function update(UpdateRequest $request, $id)
    {
        try {
            $model = $this->voucherInterface->getById($id);
            $this->voucherInterface
                ->update($model, $request->data());

            return redirect()->route('admin.vouchers.index')
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function destroy($id)
    {
        try {
            $this->voucherInterface->delete($this->voucherInterface->getById($id));
            return redirect()->route('admin.vouchers.index')
                ->with('success', 'Berhasil hapus data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }
}
