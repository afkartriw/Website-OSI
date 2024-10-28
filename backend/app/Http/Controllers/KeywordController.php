<?php

namespace App\Http\Controllers;

use App\Models\KeywordBlog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class KeywordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Ambil semua data keyword blogs
        $keywords = KeywordBlog::all();
        return response()->json($keywords);
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
            'name_keyword' => 'required|string|max:255',
        ]);

        // Buat data keyword blog baru
        $keyword = KeywordBlog::create([
            'name_keyword' => $request->name_keyword,
        ]);

        return response()->json($keyword, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Tampilkan data keyword blog beserta relasi blogs berdasarkan id
        $keyword = KeywordBlog::with('blogs')->findOrFail($id);
    
        // Mengubah path images_blog untuk setiap blog
        if ($keyword->blogs) {
            foreach ($keyword->blogs as $blog) {
                if ($blog->images_blog) {
                    // Ubah images_blog menjadi URL yang bisa diakses
                    $blog->images_blog = \Storage::disk('public')->url($blog->images_blog);
                }
            }
        }
    
        return response()->json($keyword);
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
            'name_keyword' => 'required|string|max:255',
        ]);

        // Cari data keyword blog berdasarkan id
        $keyword = KeywordBlog::findOrFail($id);

        // Update data keyword blog
        $keyword->update([
            'name_keyword' => $request->name_keyword,
        ]);

        return response()->json($keyword);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Hapus data keyword blog berdasarkan id
        $keyword = KeywordBlog::findOrFail($id);
        $keyword->delete();

        return response()->json(null, 204);
    }
}
