<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Interfaces\OrderInterface;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    public function __construct(Request $request, OrderInterface $orderInterface)
    {
        $this->request = $request;
        $this->orderInterface = $orderInterface;
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
}
