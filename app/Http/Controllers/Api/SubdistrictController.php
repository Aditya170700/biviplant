<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Interfaces\CityInterface;
use App\Http\Controllers\Controller;
use App\Interfaces\SubdistrictInterface;
use App\Http\Resources\Subdistrict\SubdistrictCollection;

class SubdistrictController extends Controller
{
    public function __construct(Request $request, CityInterface $cityInterface, SubdistrictInterface $subdistrictInterface)
    {
        $this->request = $request;
        $this->cityInterface = $cityInterface;
        $this->subdistrictInterface = $subdistrictInterface;
    }

    public function index()
    {
        $results = $this->subdistrictInterface
            ->getAll($this->cityInterface->getById($this->request->city_id));
        return new SubdistrictCollection($results);
    }
}
