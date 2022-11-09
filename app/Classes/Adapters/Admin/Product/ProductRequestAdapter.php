<?php

namespace App\Classes\Adapters\Admin\Product;

use App\Classes\Adapters\DataRequestAdapterInterface;

class ProductRequestAdapter implements DataRequestAdapterInterface
{
    public static function rulesCreated(): array
    {
        return [
            'meta_title' => 'required|string|max:255',
            'meta_description' => 'required|string|max:255',
            'meta_keyword' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:products',
            'price' => 'required|numeric',
            'strike_price' => 'numeric|gt:price',
            'description' => 'required|string',
            'stock' => 'required|numeric',
            'weight' => 'required|numeric',
            'condition' => 'max:255',
            'category_id' => 'required',
            'is_featured' => 'required'
        ];
    }

    public static function rulesUpdated($id): array
    {
        return [
            'meta_title' => 'required|string|max:255',
            'meta_description' => 'required|string|max:255',
            'meta_keyword' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:products,slug,' . $id,
            'price' => 'required|numeric',
            'strike_price' => 'numeric|gt:price',
            'description' => 'required|string',
            'stock' => 'required|numeric',
            'weight' => 'required|numeric',
            'condition' => 'max:255',
            'category_id' => 'required',
            'is_featured' => 'required'
        ];
    }

    public static function transform($data)
    {
        return [
            'meta_title' => $data['meta_title'],
            'meta_description' => $data['meta_description'],
            'meta_keyword' => $data['meta_keyword'],
            'name' => $data['name'],
            'slug' => $data['slug'],
            'price' => $data['price'],
            'strike_price' => $data['strike_price'],
            'description' => $data['description'],
            'stock' => $data['stock'],
            'weight' => $data['weight'],
            'condition' => $data['condition'],
            'category_id' => $data['category_id'],
            'is_featured' => $data['is_featured']
        ];
    }

    public static function attributes(): array
    {
        return [
            'meta_title' => 'Meta Title',
            'meta_description' => 'Meta Deskription',
            'meta_keyword' => 'Meta Keyword',
            'name' => 'Nama Produk',
            'slug' => 'Slug Produk',
            'price' => 'Harga',
            'strike_price' => 'Harga Coret',
            'description' => 'Deskripsi',
            'stock' => 'Stok',
            'weight' => 'Berat (gr)',
            'condition' => 'Kondisi',
            'category_id' => 'Kategori Produk',
            'is_featured' => 'Kondisi tampilan unggulan'
        ];
    }
}
