<?php

namespace App\Classes\Adapters\Admin\File;

use App\Classes\Adapters\DataRequestAdapterInterface;

class FileRequestAdapter implements DataRequestAdapterInterface
{
    public static function rulesCreated(): array
    {
        return [
            'name' => 'required|string|max:255',
            'alt' => 'required|string|max:255',
            'description' => 'required|string',
            'product_id' => 'required|string',
            'path' => 'required|file|mimes:jpeg,png,jpg,mp4,gif|max:5000',
        ];
    }

    public static function rulesUpdated($id): array
    {
        return [];
    }

    public static function transform($data)
    {
        return [
            'name' => $data['name'],
            'alt' => $data['alt'],
            'description' => $data['description'],
            'product_id' => $data['product_id'],
            'path' => $data['path_url_adapter'],
        ];
    }

    public static function attributes(): array
    {
        return [
            'name' => 'Nama',
            'alt' => 'Nama Alternatif',
            'description' => 'Deskripsi',
            'product_id' => 'Produk',
            'path' => 'Foto',
        ];
    }
}
