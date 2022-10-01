<?php

namespace App\Models;

use App\Classes\Constants\ProductCondition;
use App\Traits\Uuid;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory, Uuid, Searchable;

    protected $guarded = [];

    protected $casts = [
        'id' => 'string',
    ];

    protected $appends = [
        'price_rp',
        'strike_price_rp',
        'text_condition'
    ];

    protected function priceRp(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['price'])
                ? "Rp." . number_format($attributes['price'], 0, ',', '.')
                : ""
        );
    }

    protected function strikePriceRp(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['strike_price'])
                ? "Rp." . number_format($attributes['strike_price'], 0, ',', '.')
                : "",
        );
    }

    protected function textCondition(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['condition'])
                ? ProductCondition::label($attributes['condition'])
                : null
        );
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function files()
    {
        return $this->hasMany(File::class);
    }

    public function origins()
    {
        return $this->belongsToMany(Origin::class);
    }

    public function toSearchableArray()
    {
        return [
            'name' => $this->name,
        ];
    }

    public function cart_user()
    {
        return $this->hasOne(Cart::class)->where('user_id', auth()->id());
    }
}
