<?php

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\ProjectCategoryController;
use App\Http\Controllers\PerusahaanController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TeamMemberController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\SuperiorityController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\VacancyController;
use App\Http\Controllers\TechnologyCategoryController;
use App\Http\Controllers\TechnologyController;
use App\Http\Controllers\KeywordController;










/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/admin/profile', [AdminController::class, 'profile']);
    Route::post('/admin/logout', [AdminController::class, 'logout']);  // Tambahkan rute logout
});


Route::post('/admin/register', [AdminController::class, 'register']);
Route::post('/admin/login', [AdminController::class, 'login']);

//Halaman Home///
Route::resource('settings', SettingsController::class);

//Poject Category//
Route::resource('project-categories', ProjectCategoryController::class);

//Perusahaan//
Route::resource('perusahaans', PerusahaanController::class);

//Project///
Route::resource('projects', ProjectController::class);

//Service Type//
Route::resource('services', ServiceController::class);

//Team Member//
Route::resource('team-members', TeamMemberController::class);

//Gallery//
Route::resource('galleries', GalleryController::class);

//
Route::resource('superiorities', SuperiorityController::class);

// Route to attach a superiority to a project using project_id and superiority_id from the request body
Route::post('/attach-superiority', function (Request $request) {
    // Get the input values
    $projectId = $request->input('project_id');
    $superiorityId = $request->input('superiority_id');

    // Find the project using the custom primary key 'id_project'
    $project = Project::where('id_project', $projectId)->firstOrFail();

    // Attach the superiority using the 'superiorities' relationship
    $project->superiorities()->attach($superiorityId);

    return response()->json(['message' => 'Superiority attached to project successfully']);
});


////Blog///
Route::resource('blogs', BlogController::class);


//career//
Route::resource('careers', CareerController::class);

//Vacancy//
Route::resource('vacancies', VacancyController::class);


//technology-categories//
Route::resource('technology-categories', TechnologyCategoryController::class);

//technology//
Route::resource('technologies', TechnologyController::class);


//keyword///
Route::resource('keywords', KeywordController::class);

