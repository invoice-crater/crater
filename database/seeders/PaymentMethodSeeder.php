<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Crater\Models\PaymentMethod;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PaymentMethod::updateOrCreate(['name' => 'Cash'], ['company_id' => 1]);
        PaymentMethod::updateOrCreate(['name' => 'Check'], ['company_id' => 1]);
        PaymentMethod::updateOrCreate(['name' => 'Credit Card'], ['company_id' => 1]);
        PaymentMethod::updateOrCreate(['name' => 'Bank Transfer'], ['company_id' => 1]);
    }
}
