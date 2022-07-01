<?php

namespace App\Models;

use App\Services\File;
use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory, Uuid;

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
}
