<?php

namespace App\Console\Commands;

use App\Models\City;
use App\Models\Province;
use App\Models\Subdistrict;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class SyncRajaOngkir extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:ro';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync RajaOngkir';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            $this->info("Sync data from RajaOngkir, please wait...");
            $this->info("Fetch data from RajaOngkir api");

            $response = Http::get(env('URL_RO') . 'province', [
                'key' => env('API_KEY_RO'),
            ]);

            $status = collect($response->json())['rajaongkir']['status'];
            $results = collect($response->json())['rajaongkir']['results'] ?? NULL;

            if (!$response->ok()) {
                throw new \Exception($status['description'], $status['code']);
            }

            $this->info("Successfully fetch data from RajaOngkir api");
            $this->info("Sync data to local database\n\n");
            $progressBar = $this->output->createProgressBar(count($results));
            $progressBar->start();

            DB::beginTransaction();
            foreach ($results as $result) {
                // UPDATE OR CREATE PROVINCE
                Province::updateOrCreate([
                    'id' => $result['province_id'],
                    'name' => $result['province'],
                ]);

                $responseCity = Http::get(env('URL_RO') . 'city', [
                    'key' => env('API_KEY_RO'),
                    'province' => $result['province_id'],
                ]);

                $statusCity = collect($responseCity->json())['rajaongkir']['status'];
                $resultsCity = collect($responseCity->json())['rajaongkir']['results'] ?? NULL;

                if (!$responseCity->ok()) {
                    throw new \Exception($statusCity['description'], $statusCity['code']);
                }

                foreach ($resultsCity as $resultCity) {
                    // UPDATE OR CREATE CITY
                    City::updateOrCreate([
                        'id' => $resultCity['city_id'],
                        'type' => $resultCity['type'],
                        'name' => $resultCity['city_name'],
                        'postal_code' => $resultCity['postal_code'],
                        'province_id' => $resultCity['province_id'],
                    ]);

                    $responseSubdistrict = Http::get(env('URL_RO') . 'subdistrict', [
                        'key' => env('API_KEY_RO'),
                        'city' => $resultCity['city_id'],
                    ]);

                    $statusSubdistrict = collect($responseSubdistrict->json())['rajaongkir']['status'];
                    $resultsSubdistrict = collect($responseSubdistrict->json())['rajaongkir']['results'] ?? NULL;

                    if (!$responseSubdistrict->ok()) {
                        throw new \Exception($statusSubdistrict['description'], $statusSubdistrict['code']);
                    }

                    foreach ($resultsSubdistrict as $resultSubdistrict) {
                        // UPDATE OR CREATE SUBDISTRICT
                        Subdistrict::updateOrCreate([
                            'id' => $resultSubdistrict['subdistrict_id'],
                            'type' => $resultSubdistrict['type'],
                            'name' => $resultSubdistrict['subdistrict_name'],
                            'city_id' => $resultSubdistrict['city_id'],
                        ]);
                    }
                }

                $progressBar->advance();
            }
            $progressBar->finish();
            DB::commit();
            $this->info("\n\nSuccessfully sync data from RajaOngkir api");
        } catch (\Throwable $th) {
            DB::rollBack();
            $this->error("\n\n{$th->getMessage()}");
        }
    }
}
