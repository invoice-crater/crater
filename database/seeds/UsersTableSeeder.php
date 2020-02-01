<?php

use Illuminate\Database\Seeder;
use Crater\User;
use Crater\Setting;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        try {
            User::create([
                'email' => 'admin@craterapp.com',
                'name' => 'Jane Doe',
                'role' => 'admin',
                'password' => Hash::make('crater@123')
            ]);
        } catch (Exception $e) {}

        try {
            Setting::setSetting('profile_complete', 0);
        } catch (Exception $e) {}

    }
}
