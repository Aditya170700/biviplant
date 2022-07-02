<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Province\ProvinceCollection;
use App\Interfaces\ProvinceInterface;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    public function __construct(Request $request, ProvinceInterface $provinceInterface)
    {
        $this->request = $request;
        $this->provinceInterface = $provinceInterface;
    }

    public function index()
    {
        $results = $this->provinceInterface
            ->getAll();
        return new ProvinceCollection($results);
    }
}
