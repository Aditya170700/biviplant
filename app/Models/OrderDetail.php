<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderDetail extends Model
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

    public function user_address()
    {
        return $this->hasOne(UserAddress::class, 'id', 'user_address_id');
    }

    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }

    public function order()
    {
        return $this->hasOne(Order::class, 'id', 'order_id');
    }
}
