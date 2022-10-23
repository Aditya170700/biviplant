<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Interfaces\OrderInterface;
use App\Http\Controllers\Controller;
use App\Interfaces\OrderDetailInterface;
use App\Jobs\ShippingJob;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function __construct(Request $request, OrderInterface $orderInterface, OrderDetailInterface $orderDetailInterface)
    {
        $this->request = $request;
        $this->orderInterface = $orderInterface;
        $this->orderDetailInterface = $orderDetailInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Dashboard/Order/Index', [
                'results' => $this->orderInterface->getPaginated($this->request),
                'filters' => $this->request->all(['search', 'field', 'direction', 'limit']),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function show(string $id)
    {
        try {
            return Inertia::render('Dashboard/Order/Show', [
                'order' => $this->orderInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function track(string $id)
    {
        try {
            return Inertia::render('Dashboard/Order/Track', [
                'order_detail' => $this->orderDetailInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function updateReceipt(Request $request, $id)
    {
        try {
            DB::beginTransaction();
            $orderDetail = $this->orderDetailInterface->getById($id, ['order']);

            $this->orderDetailInterface
                ->updateReceipt($request, $orderDetail);
            if (!$this->orderDetailInterface->checkReceipt($orderDetail->order_id)) {
                $this->orderInterface
                    ->updateStatus('Dikirim', $orderDetail->order);
                dispatch(new ShippingJob($this->orderInterface->getById($orderDetail->order_id)));
            } else {
                $this->orderInterface
                    ->updateStatus('Dikemas', $orderDetail->order);
            }

            DB::commit();
            return redirect()->back()
                ->with('success', 'Resi berhasil diupdate');
        } catch (\Throwable $th) {
            DB::rollBack();
            panic($th);
        }
    }
}
