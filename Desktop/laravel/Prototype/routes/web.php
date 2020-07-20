<?php

use Illuminate\Support\Facades\Route;
use App\group;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/project','HomeController@project')->name('project');

Route::get('/group','HomeController@group')->name('group');

Route::get('/creategroup', 'GroupController@index')->name('creategroup');

Route::post('/addData','GroupController@addData')->name('addData');