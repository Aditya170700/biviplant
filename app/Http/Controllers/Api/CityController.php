<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Interfaces\CityInterface;
use App\Http\Controllers\Controller;
use App\Interfaces\ProvinceInterface;
use App\Http\Resources\City\CityCollection;

class CityController extends Controller
{
    public function __construct(Request $request, ProvinceInterface $provinceInterface, CityInterface $cityInterface)
    {
        $this->request = $request;
        $this->provinceInterface = $provinceInterface;
        $this->cityInterface = $cityInterface;
    }

    public function index()
    {
        $results = $this->cityInterface
            ->getAll($this->provinceInterface->getById($this->request->province_id));
        return new CityCollection($results);
    }
}
