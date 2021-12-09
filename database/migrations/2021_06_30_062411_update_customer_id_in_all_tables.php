<?php

use Crater\Models\Address;
use Crater\Models\Customer;
use Crater\Models\CustomField;
use Crater\Models\Estimate;
use Crater\Models\Expense;
use Crater\Models\Invoice;
use Crater\Models\Payment;
use Crater\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class UpdateCustomerIdInAllTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $users = User::where('role', 'customer')
            ->get();

        $users->makeVisible('password', 'remember_token');

        Schema::disableForeignKeyConstraints();

        try {
            DB::beginTransaction();

            if ($users) {
                foreach ($users as $user) {
                    $newCustomer = Customer::updateOrCreate([
                        'name' => $user->name,
                        'email' => $user->email,
                    ], $user->toArray());

                    $customFields = CustomField::where('model_type', 'User')->get();

                    if ($customFields) {
                        $user->fields->each(function ($customFieldValue) use ($newCustomer) {
                            $customFieldValue->custom_field_valuable_type = "Crater\Models\Customer";
                            $customFieldValue->custom_field_valuable_id = $newCustomer->id;
                            $customFieldValue->save();

                            $customField = $customFieldValue->customField;
                            $customField->model_type = "Customer";
                            $customField->slug = Str::upper('CUSTOM_'.$customField->model_type.'_'.Str::slug($customField->label, '_'));
                            $customField->save();
                        });
                    }

                    $userAddresses = Address::where('user_id', $user->id)->get();
                    foreach($userAddresses as $address) {
                        $address->customer_id = $newCustomer->id;
                        $address->user_id = null;
                        $address->save();
                    }
                    
                    $userExpenses = Expense::where('user_id', $user->id)->get();
                    foreach($userExpenses as $expense) {
                        $expense->customer_id = $newCustomer->id;
                        $expense->user_id = null;
                        $expense->save();
                    }
                    
                    $userEstimates = Estimate::where('user_id', $user->id)->get();
                    foreach($userEstimates as $estimate) {
                        $estimate->customer_id = $newCustomer->id;
                        $estimate->user_id = null;
                        $estimate->save();
                    }
                    
                    $userInvoices = Invoice::where('user_id', $user->id)->get();
                    foreach($userInvoices as $invoice) {
                        $invoice->customer_id = $newCustomer->id;
                        $invoice->user_id = null;
                        $invoice->save();
                    }
                    
                    $userPayments = Payment::where('user_id', $user->id)->get();
                    foreach($userPayments as $payment) {
                        $payment->customer_id = $newCustomer->id;
                        $payment->save();
                    }
                }
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            die($e->getMessage());
        }
        Schema::enableForeignKeyConstraints();


        try {
            Schema::table('estimates', function (Blueprint $table) {
                if (config('database.default') !== 'sqlite') {
                    $table->dropForeign(['user_id']);
                }
                $table->dropColumn('user_id');
            });
        } catch (\Exception $e) {
            echo $e->getMessage() . PHP_EOL;
        }

        try {
            Schema::table('expenses', function (Blueprint $table) {
                if (config('database.default') !== 'sqlite') {
                    $table->dropForeign(['user_id']);
                }
                $table->dropColumn('user_id');
            });
        } catch (\Exception $e) {
            echo $e->getMessage() . PHP_EOL;
        }

        try {
            Schema::table('invoices', function (Blueprint $table) {
                if (config('database.default') !== 'sqlite') {
                    $table->dropForeign(['user_id']);
                }
                $table->dropColumn('user_id');
            });
        } catch (\Exception $e) {
            echo $e->getMessage() . PHP_EOL;
        }

        try {
            Schema::table('payments', function (Blueprint $table) {
                if (config('database.default') !== 'sqlite') {
                    $table->dropForeign(['user_id']);
                }
                $table->dropColumn('user_id');
            });
        } catch (\Exception $e) {
            echo $e->getMessage() . PHP_EOL;
        }

        try {
            Schema::table('items', function (Blueprint $table) {
                $table->dropColumn('unit');
            });
        } catch (\Exception $e) {
            echo $e->getMessage() . PHP_EOL;
        }

        $users = User::where('role', 'customer')
            ->delete();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
