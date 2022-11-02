<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Voucher extends Model
{
    use HasFactory, Uuid;

    protected $guarded = [];

    protected $casts = [
        'id' => 'string',
    ];

    protected $appends = [
        'min_order_rp',
        'expired_at_formatted',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class, 'voucher_code', 'code');
    }

    protected function minOrderRp(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['min_order'])
                ? "Rp." . number_format($attributes['min_order'], 0, ',', '.')
                : ""
        );
    }

    protected function expiredAtFormatted(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['expired_at'])
                ? date('d.m.Y', strtotime($attributes['expired_at']))
                : ""
        );
    }
}
