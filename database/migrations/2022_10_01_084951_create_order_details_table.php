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
        Schema::create('order_details', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('product_id')->index();
            $table->uuid('user_address_id')->index();
            $table->uuid('order_id')->index();
            $table->string('courier');
            $table->string('shipping_service');
            $table->string('shipping_cost');
            $table->string('shipping_etd')->nullable();
            $table->integer('qty');
            $table->integer('price');
            $table->integer('strike_price');
            $table->timestamps();

            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('user_address_id')->references('id')->on('user_addresses');
            $table->foreign('order_id')->references('id')->on('orders')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_details');
    }
};
