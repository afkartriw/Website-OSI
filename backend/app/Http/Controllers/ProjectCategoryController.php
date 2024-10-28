<?php

namespace App\Http\Controllers;

use App\Models\ProjectCategory;
use Illuminate\Http\Request;

class ProjectCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Ambil semua data project categories
        $categories = ProjectCategory::all();
        return response()->json($categories);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data yang dikirimkan
        $request->validate([
            'name_category' => 'required|string|max:255',
        ]);

        // Buat data project category baru
        $category = ProjectCategory::create([
            'name_category' => $request->name_category,
        ]);

        return response()->json($category, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id_category)
    {
        // Tampilkan data project category berdasarkan id
        $category = ProjectCategory::findOrFail($id_category);
        return response()->json($category);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id_category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id_category)
    {
        // Validasi data yang dikirimkan
        $request->validate([
            'name_category' => 'required|string|max:255',
        ]);

        // Cari data project category berdasarkan id
        $category = ProjectCategory::findOrFail($id_category);

        // Update data project category
        $category->update([
            'name_category' => $request->name_category,
        ]);

        return response()->json($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id_category)
    {
        // Hapus data project category berdasarkan id
        $category = ProjectCategory::findOrFail($id_category);
        $category->delete();

        return response()->json(null, 204);
    }
}
