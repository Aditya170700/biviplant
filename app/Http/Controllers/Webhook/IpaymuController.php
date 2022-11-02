<?php

namespace App\Http\Controllers\Webhook;

use App\Http\Controllers\Controller;
use App\Interfaces\OrderInterface;
use App\Jobs\PaymentJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class IpaymuController extends Controller
{
    public function __construct(Request $request, OrderInterface $orderInterface)
    {
        $this->request = $request;
        $this->orderInterface = $orderInterface;
    }

    public function notify()
    {
        if (strtolower($this->request->status) == 'berhasil') {
            $order = $this->orderInterface->getByTrxId($this->request->trx_id);
            $this->orderInterface->updateStatus('Dikemas', $order);
            dispatch(new PaymentJob($order));
        }

        return strtolower($this->request->status);
    }
}
