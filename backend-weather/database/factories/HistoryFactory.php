<?php

namespace Database\Factories;

use App\Models\History;
use Illuminate\Database\Eloquent\Factories\Factory;

class HistoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = History::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'city' => 'Miami',
            'lat' => '25.7743',
            'lng' => '-80.1937',
            'temp' => '27.5',
            'date' => $this->faker->date,
        ];
    }
}
