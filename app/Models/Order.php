<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $appends = [
        'total_rp',
        'voucher_rp',
    ];

    protected $casts = [
        'id' => 'string',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function order_details()
    {
        return $this->hasMany(OrderDetail::class);
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }

    protected function totalRp(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['total'])
                ? "Rp." . number_format($attributes['total'], 0, ',', '.')
                : ""
        );
    }

    protected function voucherRp(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['voucher'])
                ? "Rp." . number_format($attributes['voucher'], 0, ',', '.')
                : ""
        );
    }

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['created_at'])
                ? date('d F Y, H:i', strtotime($attributes['created_at']))
                : "-"
        );
    }

    protected function paidAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['paid_at'])
                ? date('d F Y, H:i', strtotime($attributes['paid_at']))
                : "-"
        );
    }

    protected function sendAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['send_at'])
                ? date('d F Y, H:i', strtotime($attributes['send_at']))
                : "-"
        );
    }

    protected function finishAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => isset($attributes['finish_at'])
                ? date('d F Y, H:i', strtotime($attributes['finish_at']))
                : "-"
        );
    }
}
