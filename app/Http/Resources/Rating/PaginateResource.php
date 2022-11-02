<?php

namespace App\Http\Resources\Rating;

use Illuminate\Http\Resources\Json\JsonResource;

class PaginateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'comment' => $this->comment,
            'rating' => $this->rating,
            'user' => $this->whenLoaded('user'),
            'created_at' => $this->created_at->format('d M Y'),
        ];
    }

    public function with($request)
    {
        return [
            'status' => 200,
            'message' => 'success',
        ];
    }
}
