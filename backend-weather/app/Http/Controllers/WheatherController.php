<?php

namespace App\Http\Controllers;

use App\Models\History;
use Carbon\Carbon;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;


class WheatherController extends Controller
{
    public function index(Request $request)
    {
        $response = Http::get('https://api.openweathermap.org/data/2.5/weather', [
            'q' => $request->city,
            'appid' => 'c3e88691abf5ea21e048b1fe9ad02496',
            'units' => 'metric'
        ]);
        $this->saveDataHistory($response->json(), $request->city);
        return response($response->json());
    }


    public function history(Request $request)
    {
        return History::where('city', '=', $request->city)->get();
    }



    protected function saveDataHistory($data, $city)
    {
        if ($data['cod'] === 200) {
            if ($this->dataIsAlreadyRegistered($city)) {
                History::create([
                    'city' => ucfirst($city),
                    'temp' => $data['main']['temp'],
                    'lat' => $data['coord']['lat'],
                    'lng' => $data['coord']['lon'],
                    'icon' => $data['weather'][0]['icon'],
                    'date' => Carbon::now()
                ]);
            }
        }
    }


    protected function dataIsAlreadyRegistered($city)
    {
        $now = date('Y-m-d');
        $isAlready = History::where('city', '=', ucfirst($city))
            ->where('date', '=', $now)
            ->first();
        if (is_null($isAlready)) {
            return true;
        }
        return false;
    }
}
