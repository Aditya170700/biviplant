<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Interfaces\OriginInterface;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Origin\StoreRequest;

class OriginController extends Controller
{
    public function __construct(Request $request, OriginInterface $originInterface)
    {
        $this->request = $request;
        $this->originInterface = $originInterface;
    }

    public function index()
    {
        try {
            $result = $this->originInterface->getPaginated($this->request, [
                'subdistrict' => function ($query) {
                    $query->select('id', 'city_id', 'name')
                        ->with([
                            'city' => function ($query) {
                                $query->select('id', 'province_id', 'name')
                                    ->with([
                                        'province' => function ($query) {
                                            $query->select('id', 'name');
                                        }
                                    ]);
                            }
                        ]);
                }
            ]);

            return Inertia::render('Dashboard/Origin/Index', [
                'result' => $result,
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $this->originInterface
                ->create($request->data());

            return redirect()->back()
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function destroy($id)
    {
        try {
            $this->originInterface
                ->delete($this->originInterface->getById($id));

            return redirect()->back()
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
