<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get all career data
        $careers = Career::all();

        // Add full URL for images_career if it exists
        $careers->transform(function ($career) {
            if ($career->images_career) {
                $career->images_career = Storage::disk('public')->url($career->images_career);
            }
            return $career;
        });

        return response()->json($careers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate incoming data
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'images_career' => 'nullable|file|mimes:jpg,png,jpeg|max:2048', // File validation
        ]);

        // Handle file upload if it exists
        $imagePath = null;
        if ($request->hasFile('images_career')) {
            $imagePath = $request->file('images_career')->store('careers', 'public');
        }

        // Create a new career entry
        $career = Career::create([
            'name' => $request->name,
            'description' => $request->description,
            'images_career' => $imagePath,
        ]);

        // Convert path to full URL
        $career->images_career = $imagePath ? Storage::disk('public')->url($imagePath) : null;

        return response()->json($career, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Get career data by ID
        $career = Career::findOrFail($id);

        // Add full URL for images_career if it exists
        if ($career->images_career) {
            $career->images_career = Storage::disk('public')->url($career->images_career);
        }

        return response()->json($career);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validate incoming data
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'images_career' => 'nullable|file|mimes:jpg,png,jpeg|max:2048', // File validation
        ]);

        // Find career by ID
        $career = Career::findOrFail($id);

        // Handle file upload if it exists
        if ($request->hasFile('images_career')) {
            // Delete old image if exists
            if ($career->images_career) {
                Storage::disk('public')->delete($career->images_career);
            }
            $imagePath = $request->file('images_career')->store('careers', 'public');
            $career->images_career = $imagePath;
        }

        // Update other fields
        $career->name = $request->name;
        $career->description = $request->description;
        $career->save();

        // Convert path to full URL
        $career->images_career = $career->images_career ? Storage::disk('public')->url($career->images_career) : null;

        return response()->json($career);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Find career by ID
        $career = Career::findOrFail($id);

        // Delete image if exists
        if ($career->images_career) {
            Storage::disk('public')->delete($career->images_career);
        }

        $career->delete();

        return response()->json(null, 204);
    }
}
