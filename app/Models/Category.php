<?php

namespace App\Models;

use App\Traits\Uuid;
use App\Services\File;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Category extends Model
{
    use HasFactory, Uuid, Searchable;

    protected $guarded = [];

    protected $casts = [
        'id' => 'string',
    ];

    protected $appends = [
        'banner_url',
        'icon_url',
    ];

    protected function bannerUrl(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => File::show($attributes['banner'] ?? ''),
        );
    }

    protected function iconUrl(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => File::show($attributes['icon'] ?? ''),
        );
    }

    public function toSearchableArray()
    {
        return [
            'name' => $this->name,
        ];
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function scopeFindBySlug($query, $slug)
    {
        $model = $query->where('slug', $slug)->first();

        if (empty($model)) {
            throw new ModelNotFoundException();
        }

        return $model;
    }
}
