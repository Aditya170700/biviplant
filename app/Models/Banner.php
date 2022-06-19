<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Casts\Attribute;
use App\Services\File;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory, Uuid;

    protected $guarded = [];

    protected $casts = [
        'id' => 'string',
    ];

    protected $appends = [
        'path_url',
    ];

    protected function pathUrl(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => File::show($attributes['path']),
        );
    }

}
