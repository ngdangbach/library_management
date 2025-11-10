<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    /**
     * Các trường có thể được gán giá trị hàng loạt (Mass Assignable).
     * available_copies sẽ được tính toán qua logic nghiệp vụ.
     */
    protected $fillable = [
        'title',
        'author',
        'category',
        'publication_year',
        'description',
        'total_copies',
        'available_copies',
    ];

    // public function ratings()
    // {
    //     return $this->hasMany(Rating::class);
    // }
    
    // public function wishlists()
    // {
    //     return $this->hasMany(Wishlist::class);
    // }
}
