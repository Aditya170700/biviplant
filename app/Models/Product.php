<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory, Uuid;

    protected $guarded = [];

    protected $casts = [
        'id' => 'string',
    ];

    protected $appends = [
        'price_rp',
        'strike_price_rp',
    ];

    protected function priceRp(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => "Rp." . number_format($attributes['price'], 0, ',', '.'),
        );
    }

    protected function strikePriceRp(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => "Rp." . number_format($attributes['strike_price'], 0, ',', '.'),
        );
    }
}
