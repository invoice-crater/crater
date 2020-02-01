<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        try {
            Role::create(['name' => 'admin']);
        } catch (Exception $e) {}
        
        try {
            Role::create(['name' => 'contact']);
        } catch (Exception $e) {}
        
        try {
            Role::create(['name' => 'staff']);
        } catch (Exception $e) {}
    }
}
