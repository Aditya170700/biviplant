<?php

namespace App\Models;

use App\Traits\Uuid;
use App\Services\File as FileService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class File extends Model
{
    use HasFactory, Uuid;

    protected $guarded = [];

    protected $casts = [
        'id' => 'string',
    ];

    protected $appends = [
        'src',
        'title',
    ];

    protected function src(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => FileService::show($attributes['path'] ?? ''),
        );
    }

    protected function title(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => FileService::show($attributes['title'] ?? ''),
        );
    }
}
