<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        'id' => $this->id,
        'title' => $this->title,
        'author' => $this->author,
        'category' => $this->category,
        'stock_quantity' => $this->stock_quantity,
        'rating_avg' => $this->ratings()->avg('score'), 
    ];
    }
}
