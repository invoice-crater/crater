<?php

namespace Database\Seeders;

use Crater\Models\Unit;
use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Unit::updateOrCreate(['name' => 'box'], ['company_id' => 1]);
        Unit::updateOrCreate(['name' => 'cm'], ['company_id' => 1]);
        Unit::updateOrCreate(['name' => 'dz'], ['company_id' => 1]);
        Unit::updateOrCreate(['name' => 'ft'], ['company_id' => 1]);
        Unit::updateOrCreate(['name' => 'g'], ['company_id' => 1]);
        Unit::updateOrCreate(['name' => 'in'], ['company_id' => 1]);
        Unit::updateOrCreate(['name' => 'kg'], ['company_id' => 1]);
        Unit::updateOrCreate(['name' => 'km'], ['company_id' => 1]);
        Unit::updateOrCreate(['name' => 'lb'], ['company_id' => 1]);
        Unit::updateOrCreate(['name' => 'mg'], ['company_id' => 1]);
        Unit::updateOrCreate(['name' => 'pc'], ['company_id' => 1]);
    }
}
