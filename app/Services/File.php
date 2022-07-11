<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class File
{
    public static function upload($path, $file)
    {
        return "storage/" . Storage::disk('public')->put($path, $file);
    }

    public static function uploadAs($path, $file, $name)
    {
        return "storage/" . Storage::disk('public')->putFileAs($path, $file, $name);
    }

    public static function show($path)
    {
        return asset($path);
    }
}
