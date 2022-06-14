<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class File
{
    public static function upload($path, $file)
    {
        return "storage/" . Storage::disk('public')->put($path, $file);
    }

    public static function show($path)
    {
        return asset($path);
    }
}
