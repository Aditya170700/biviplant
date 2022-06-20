<?php

namespace App\Classes\Adapters\Admin\Event;

use App\Classes\Adapters\DataRequestAdapterInterface;

class EventRequestAdapter implements DataRequestAdapterInterface
{

    public static function rulesCreated(): array
    {
        return [
            'title' => 'required|string|max:255',
            'sub_title' => 'required|string|max:255',
            'path' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ];
    }

    public static function rulesUpdated($id): array
    {
        return [
            'title' => 'required|string|max:255',
            'sub_title' => 'required|string|max:255',
        ];
    }

    public static function transform($data)
    {
        return [
            'title' => $data['title'],
            'sub_title' => $data['sub_title'],
            'path' => $data['path_url'],
        ];
    }

    public static function attributes(): array
    {
        return [
            'title' => 'Judul',
            'sub_title' => 'Sub Judul',
            'path' => 'Gambar'
        ];
    }
}
