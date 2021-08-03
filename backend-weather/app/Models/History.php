<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['city', 'temp', 'lat', 'lng', 'date','icon'];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'history';
}
