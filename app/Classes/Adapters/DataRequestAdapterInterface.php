<?php

namespace App\Classes\Adapters;

interface DataRequestAdapterInterface
{
    public static function rulesCreated();
    public static function rulesUpdated($id);
    public static function transform($data);
    public static function attributes();
}
