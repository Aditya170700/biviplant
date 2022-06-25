<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Services\File;

class Event extends Model
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
