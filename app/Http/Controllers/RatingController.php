<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Interfaces\OrderInterface;
use App\Interfaces\RatingInterface;

class RatingController extends Controller
{
    public function __construct(Request $request, RatingInterface $ratingInterface, OrderInterface $orderInterface)
    {
        $this->request = $request;
        $this->ratingInterface = $ratingInterface;
        $this->orderInterface = $orderInterface;
    }

    public function index(string $id)
    {
        try {
            $order = $this->orderInterface->getById($id);

            if ($order->payment_status != 'Selesai') {
                throw new Exception("Pesanan belum diselesaikan", 422);
            }

            $results = $order->order_details->map(function ($item) use ($id) {
                return [
                    'order_id' => $id,
                    'product_id' => $item->product_id,
                    'product' => $item->product->name,
                    'image' => $item->product->files->first()->src,
                    'rating' => 1,
                    'comment' => '',
                ];
            });

            return Inertia::render('Rating', [
                'results' => $results,
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function store()
    {
        $results = collect($this->request->results)->map(function ($item) {
            return [
                'id' => Str::uuid()->toString(),
                'user_id' => auth()->id(),
                'order_id' => $item['order_id'],
                'product_id' => $item['product_id'],
                'rating' => $item['rating'],
                'comment' => $item['comment'],
                'created_at' => now(),
                'updated_at' => now(),
            ];
        });

        $this->ratingInterface->create($results->toArray());

        return redirect()->route('homepage')->with('success', 'Berhasil memberikan rating');
    }
}
