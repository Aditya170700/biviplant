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
        Schema::table('settings', function (Blueprint $table) {
            $table->string('mail_mailer')->after('logo')->nullable();
            $table->string('mail_host')->after('mail_mailer')->nullable();
            $table->string('mail_port')->after('mail_host')->nullable();
            $table->string('mail_username')->after('mail_port')->nullable();
            $table->string('mail_password')->after('mail_username')->nullable();
            $table->string('mail_encryption')->after('mail_password')->nullable();
            $table->string('mail_from_address')->after('mail_encryption')->nullable();
            $table->string('mail_from_name')->after('mail_from_address')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('settings', function (Blueprint $table) {
            //
        });
    }
};
