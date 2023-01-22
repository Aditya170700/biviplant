<?php

namespace App\Imports;

use App\Models\File;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProductImport implements ToCollection, WithHeadingRow
{
    /**
     * @param Collection $collection
     */
    public function collection(Collection $collection)
    {
        try {
            DB::beginTransaction();
            $products = [];
            $images = [];
            $originProduct = [];

            foreach ($collection as $key => $data) {
                if ($key >= 0 && $key <= 20) {
                    $id = Str::uuid()->toString();
                    $idImage = Str::uuid()->toString();
                    $category = "";
                    $condition = 1;

                    if (str_contains(strtolower($data['title']), 'jeruk')) {
                        $category = "30de0b8b-44c9-42ee-828e-1c3e80522c95";
                    } else if (str_contains(strtolower($data['title']), 'mangga')) {
                        $category = "34f1ddca-a1bf-4566-9148-ff8e98c0cfe9";
                    } else if (str_contains(strtolower($data['title']), 'pupuk')) {
                        $category = "4d47f997-b78f-473e-b3d9-f13b41dc2e24";
                    } else if (str_contains(strtolower($data['title']), 'kelengkeng')) {
                        $category = "4e7842d7-33be-48bf-862a-34efe709177f";
                    } else if (str_contains(strtolower($data['title']), 'durian')) {
                        $category = "6816df7b-0f24-4ac9-a495-bac7c05d70ca";
                    } else if (str_contains(strtolower($data['title']), 'jambu')) {
                        $category = "dc127f71-52f5-4300-bac4-3ef1da0cc6b5";
                    } else if (str_contains(strtolower($data['title']), 'tin')) {
                        $category = "dd555ae7-cbca-4593-bdb6-498af6a2a940";
                    } else if (str_contains(strtolower($data['title']), 'alpukat')) {
                        $category = "fa27cd30-168f-4132-b2b3-5e929bcdce95";
                    } else {
                        $category = "fa27cd30-168f-4132-b2b3-5e929bcdce90";
                    }

                    if (str_contains($data['link'], '100-cm')) {
                        $condition = 2;
                    }

                    $products[] = [
                        'id' => $id,
                        'meta_title' => $data['title'],
                        'meta_description' => $data['title'],
                        'meta_keyword' => str_replace(' ', ', ', strtolower($data['title'])),
                        'name' => $data['title'],
                        'slug' => Str::slug($data['title']) . '-' . random_int(1, 9999),
                        'price' => (int)str_replace(',', '', $data['price']),
                        'strike_price' => (int)str_replace(',', '', $data['price']) + 5000,
                        'description' => $data['title'],
                        'stock' => random_int(100, 1000),
                        'weight' => $data['weight'],
                        'condition' => $condition,
                        'category_id' => $category,
                        'is_featured' => $key < 6 ? 2 : 1,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ];

                    $originProduct[] = [
                        'origin_id' => '8b54b7b3-731e-4bdc-983c-96e03d061adf',
                        'product_id' => $id,
                    ];

                    $url = $data['thumbnail'];
                    $contents = file_get_contents($url);
                    $ext = explode('.', substr($url, strrpos($url, '/') + 1));
                    $name = 'files/' . strtolower($data['title']) . '-' . random_int(0, 999) . '.' . end($ext);
                    Storage::disk('public')->put($name, $contents);

                    $images[] = [
                        'id' => $idImage,
                        'product_id' => $id,
                        'name' => $data['title'],
                        'alt' => $data['title'],
                        'description' => $data['title'],
                        'path' => 'storage/' . $name,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ];
                }
            }

            Product::insert($products);
            DB::table('origin_product')
                ->insert($originProduct);
            File::insert($images);

            DB::commit();
            return true;
        } catch (\Throwable $th) {
            DB::rollBack();
            dd($th);
        }
    }
}
