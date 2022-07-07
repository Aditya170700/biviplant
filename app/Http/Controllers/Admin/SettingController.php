<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Interfaces\SettingInterface;
use App\Http\Requests\Admin\Setting\StoreRequest;
use Illuminate\Support\Facades\Cache;

class SettingController extends Controller
{
    public function __construct(Request $request, SettingInterface $settingInterface)
    {
        $this->request = $request;
        $this->settingInterface = $settingInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Dashboard/Setting', [
                'result' => $this->settingInterface->getOne(),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            Cache::flush();

            Cache::rememberForever('meta_title', function () use ($request) {
                return $request->meta_title;
            });

            Cache::rememberForever('meta_description', function () use ($request) {
                return $request->meta_description;
            });

            Cache::rememberForever('meta_keyword', function () use ($request) {
                return $request->meta_keyword;
            });

            $setting = $this->settingInterface->getOne();

            if ($setting) {
                $this->settingInterface
                    ->update($setting, $request->data());
            } else {
                $this->settingInterface
                    ->create($request->data());
            }

            return redirect()->back()
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
