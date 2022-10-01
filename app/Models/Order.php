<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'id' => 'string',
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function order_details()
    {
        return $this->hasOne(OrderDetail::class, 'order_id', 'id');
    }
}
