<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::middleware(['cors'])->group(function(){
    Route::get('/csrf_token', function(){
        return csrf_token();
    });
    // Route::post('example','Controller@example');
    Route::get('/get-user-list', [UserController::class, 'getUserList']);

    Route::post('/register', [UserController::class, 'store']);
});

// Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::get('/{any}', [App\Http\Controllers\HomeController::class, 'index'])->where('any', '.*');
