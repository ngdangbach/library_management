<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->string('author', 255);
            $table->string('category', 100);
            $table->year('publication_year')->nullable();
            $table->text('description')->nullable();
            $table->unsignedInteger('total_copies'); // Tổng số bản sao (lượng tồn kho ban đầu)
            $table->unsignedInteger('available_copies'); // Số lượng bản có sẵn để mượn (được cập nhật tự động)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
