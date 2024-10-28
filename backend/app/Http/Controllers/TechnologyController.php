<?php

namespace App\Http\Controllers;

use App\Models\Technology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TechnologyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    // Ambil semua data technologies
    $technologies = Technology::all()->map(function($technology) {
        // Tambahkan URL lengkap untuk logo
        if ($technology->logo) {
            $technology->logo_url = Storage::url($technology->logo);
        } else {
            $technology->logo_url = null;
        }
        return $technology;
    });

    return response()->json($technologies);
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
            'name_technology' => 'required|string|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'technology_category_id' => 'required|exists:technology_categories,id',
        ]);

        // Handle file upload for the logo
        $logoPath = null;
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('logos_technology', 'public');
        }

        // Buat data technology baru
        $technology = Technology::create([
            'name_technology' => $request->name_technology,
            'logo' => $logoPath,
            'technology_category_id' => $request->technology_category_id,
        ]);

        return response()->json($technology, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Tampilkan data technology berdasarkan id
        $technology = Technology::findOrFail($id);
        return response()->json($technology);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validasi data yang dikirimkan
        $request->validate([
            'name_technology' => 'required|string|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'technology_category_id' => 'required|exists:technology_categories,id',
        ]);

        // Cari data technology berdasarkan id
        $technology = Technology::findOrFail($id);

        // Handle file upload for the logo
        if ($request->hasFile('logo')) {
            // Delete old logo if exists
            if ($technology->logo) {
                Storage::disk('public')->delete($technology->logo);
            }
            // Store the new logo
            $technology->logo = $request->file('logo')->store('logos_technology', 'public');
        }

        // Update data technology
        $technology->update([
            'name_technology' => $request->name_technology,
            'logo' => $technology->logo,
            'technology_category_id' => $request->technology_category_id,
        ]);

        return response()->json($technology);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Hapus data technology berdasarkan id
        $technology = Technology::findOrFail($id);

        // Delete logo if exists
        if ($technology->logo) {
            Storage::disk('public')->delete($technology->logo);
        }

        $technology->delete();

        return response()->json(null, 204);
    }
}
