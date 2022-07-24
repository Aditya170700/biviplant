<?php

namespace App\Classes\Adapters\Admin\Category;

use App\Classes\Adapters\DataRequestAdapterInterface;

class CategoryRequestAdapter implements DataRequestAdapterInterface
{
    public static function rulesCreated(): array
    {
        return [
            'name' => 'required|string|max:255',
            'meta_title' => 'required|string|max:255',
            'meta_description' => 'required|string|max:255',
            'meta_keyword' => 'required|string|max:255',
            'banner' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'icon' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ];
    }

    public static function rulesUpdated($id): array
    {
        return [
            'name' => 'required|string|max:255',
            'meta_title' => 'required|string|max:255',
            'meta_description' => 'required|string|max:255',
            'meta_keyword' => 'required|string|max:255',
        ];
    }

    public static function transform($data)
    {
        return [
            'name' => $data['name'],
            'slug' => $data['slug'],
            'meta_title' => $data['meta_title'],
            'meta_description' => $data['meta_description'],
            'meta_keyword' => $data['meta_keyword'],
            'banner' => $data['banner_url_adapter'],
            'icon' => $data['icon_url_adapter'],
        ];
    }

    public static function attributes(): array
    {
        return [
            'name' => 'Nama',
            'meta_title' => 'Meta Title',
            'meta_description' => 'Meta Deskription',
            'meta_keyword' => 'Meta Keyword',
            'banner' => 'Banner',
            'icon' => 'Ikon',
        ];
    }
}
