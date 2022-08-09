<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Interfaces\OriginInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ShippingCostController extends Controller
{
    public function __construct(Request $request, OriginInterface $originInterface)
    {
        $this->request = $request;
        $this->originInterface = $originInterface;
    }

    public function getNearest()
    {
        try {
            $origin = $this->originInterface->getNearest($this->request->lat, $this->request->lng, $this->request->product_id);

            $data = [
                'origin' => $origin->subdistrict->id,
                'originType' => 'subdistrict',
                'destination' => $this->request->destination,
                'destinationType' => 'subdistrict',
                'weight' => $this->request->weight,
                'courier' => 'jne:pos:tiki:jnt:sicepat:indah:anteraja',
            ];

            $response = Http::asForm()
                ->withHeaders([
                    'key' => config('rajaongkir.key'),
                    'content-type' => 'application/x-www-form-urlencoded',
                ])
                ->post(config('rajaongkir.cost_url'), $data);

            return $response;
        } catch (\Throwable $th) {
            return response()->json([
                'nearest' => $th->getMessage()
            ], 500);
        }
    }
}
