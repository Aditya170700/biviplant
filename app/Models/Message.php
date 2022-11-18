<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Message extends Model
{
    use HasFactory, Uuid;

    protected $guarded = [];

    protected $casts = [
        'id' => 'string',
    ];

    protected $appends = [
        'date_time_formated',
    ];

    public function conversation()
    {
        return $this->belongsTo(Conversation::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function dateTimeFormated(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attribute) => Carbon::parse($attribute['created_at'])->format('H:i') .' | '. Carbon::parse($attribute['created_at'])->format('M d')
        );
    }
}
