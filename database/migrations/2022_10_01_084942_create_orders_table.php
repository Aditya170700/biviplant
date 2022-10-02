<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id')->index();
            $table->integer('total');
            $table->integer('voucher')->default(0);
            $table->integer('pg_fee');
            $table->string('pg_fee_type');
            $table->string('payment_method');
            $table->string('payment_channel');
            $table->string('payment_id');
            $table->text('payment_no');
            $table->text('payment_name');
            $table->string('payment_expired');
            $table->string('payment_status')->default('Pending');
            $table->string('receipt')->nullable();
            $table->string('paid_at')->nullable();
            $table->string('send_at')->nullable();
            $table->string('finish_at')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
