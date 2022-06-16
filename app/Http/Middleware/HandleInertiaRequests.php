<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    // protected $rootView = 'app';

    public function rootView(Request $request)
    {
        $routePrefix = explode('/', $request->route()->uri)[0];

        if ($routePrefix == 'admin') {
            return 'admin';
        }

        return 'app';
    }

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'ziggy' => function () {
                return (new Ziggy)->toArray();
            },
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'success_delete' => fn () => $request->session()->get('success_delete'),
                'failed' => fn () => $request->session()->get('failed'),
            ],
        ]);
    }
}
