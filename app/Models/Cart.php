<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cart extends Model
{
    use HasFactory, Uuid;

    protected $guarded = [];

    protected $casts = [
        'id' => 'string',
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function user_address()
    {
        return $this->hasOne(UserAddress::class, 'id', 'user_address_id');
    }

    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }
}
