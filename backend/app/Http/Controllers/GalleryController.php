<?php
// app/Http/Controllers/GalleryController.php
namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galleries = Gallery::all();

        // Convert file paths to URLs
        $galleries->transform(function ($gallery) {
            for ($i = 1; $i <= 7; $i++) {
                $imageField = "image_activity" . $i;
                if ($gallery->$imageField) {
                    $gallery->$imageField = Storage::disk('public')->url($gallery->$imageField);
                }
            }
            return $gallery;
        });

        return response()->json($galleries);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'image_activity1' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity2' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity3' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity4' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity5' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity6' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity7' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
        ]);

        $galleryData = [];

        // Handle file uploads
        for ($i = 1; $i <= 7; $i++) {
            $file = $request->file("image_activity$i");
            if ($file) {
                $galleryData["image_activity$i"] = $file->store('gallery', 'public');
            }
        }

        $gallery = Gallery::create($galleryData);

        // Convert file paths to URLs
        for ($i = 1; $i <= 7; $i++) {
            $imageField = "image_activity$i";
            if ($gallery->$imageField) {
                $gallery->$imageField = Storage::disk('public')->url($gallery->$imageField);
            }
        }

        return response()->json($gallery, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $gallery = Gallery::findOrFail($id);

        for ($i = 1; $i <= 7; $i++) {
            $imageField = "image_activity$i";
            if ($gallery->$imageField) {
                $gallery->$imageField = Storage::disk('public')->url($gallery->$imageField);
            }
        }

        return response()->json($gallery);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $gallery = Gallery::findOrFail($id);

        $validatedData = $request->validate([
            'image_activity1' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity2' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity3' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity4' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity5' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity6' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'image_activity7' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
        ]);

        // Handle file updates
        for ($i = 1; $i <= 7; $i++) {
            if ($request->hasFile("image_activity$i")) {
                // Delete old file if exists
                if ($gallery->{"image_activity$i"}) {
                    Storage::disk('public')->delete($gallery->{"image_activity$i"});
                }
                // Store new file
                $gallery->{"image_activity$i"} = $request->file("image_activity$i")->store('gallery', 'public');
            }
        }

        $gallery->save();

        // Convert file paths to URLs
        for ($i = 1; $i <= 7; $i++) {
            $imageField = "image_activity$i";
            if ($gallery->$imageField) {
                $gallery->$imageField = Storage::disk('public')->url($gallery->$imageField);
            }
        }

        return response()->json($gallery);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $gallery = Gallery::findOrFail($id);

        // Delete images from storage
        for ($i = 1; $i <= 7; $i++) {
            $imageField = "image_activity$i";
            if ($gallery->$imageField) {
                Storage::disk('public')->delete($gallery->$imageField);
            }
        }

        $gallery->delete();

        return response()->json(null, 204);
    }
}
