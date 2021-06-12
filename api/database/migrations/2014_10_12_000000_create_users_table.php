<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('username', 50);
            $table->string('img_uri', 120);
            $table->string('email', 120)->unique();
            $table->boolean('verified')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('last_connection')->nullable();
            $table->string('password');
            $table->enum('type', ['normal', 'artist', 'admin'])->default('normal');
            $table->string('last_listenned_to', 120)->nullable();
            $table->enum('petition_status', ['rejected', 'pending', 'fullfilled'])->default('rejected');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
