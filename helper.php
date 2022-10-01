<?php

use Ramsey\Uuid\Uuid as Generator;

if (!function_exists('panic')) {
    function panic($info)
    {
        if (env('APP_DEBUG') == true) {
            ddd($info);
        } else {
            throw $info;
        }
    }
}

if (!function_exists('generateUuid')) {
    function generateUuid()
    {
        return Generator::uuid4()->toString();
    }
}
