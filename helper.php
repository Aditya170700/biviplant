<?php

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