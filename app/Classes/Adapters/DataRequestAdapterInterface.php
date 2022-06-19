<?php

namespace App\Classes\Adapters;

interface DataRequestAdapterInterface
{
    public static function rules();
    public static function transform($data);
    public static function attributes();
}