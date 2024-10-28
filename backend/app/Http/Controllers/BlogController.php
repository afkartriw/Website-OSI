<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\KeywordBlog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Mengambil semua data blog beserta relasi keyword_blog
        $blogs = Blog::with('keywordBlog')->get();

        // Menambahkan URL lengkap untuk images_blog jika ada
        $blogs->transform(function ($blog) {
            if ($blog->images_blog) {
                $blog->images_blog = Storage::disk('public')->url($blog->images_blog);
            }
            return $blog;
        });

        return response()->json($blogs);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data yang dikirimkan
        $request->validate([
            'keyword_blog_id' => 'required|exists:keyword_blogs,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'images_blog' => 'nullable|file|mimes:jpg,png,jpeg|max:2048', // Validasi file gambar
            'date' => 'required|date',
        ]);

        // Proses file upload jika ada
        $imagePath = null;
        if ($request->hasFile('images_blog')) {
            $imagePath = $request->file('images_blog')->store('blogs', 'public');
        }

        // Buat data blog baru
        $blog = Blog::create([
            'keyword_blog_id' => $request->keyword_blog_id,
            'title' => $request->title,
            'description' => $request->description,
            'images_blog' => $imagePath,
            'date' => $request->date,
        ]);

        // Ubah path menjadi URL lengkap
        $blog->images_blog = $imagePath ? Storage::disk('public')->url($imagePath) : null;

        return response()->json($blog, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Tampilkan data blog berdasarkan id beserta relasi keyword_blog
        $blog = Blog::with('keywordBlog')->findOrFail($id);

        // Tambahkan URL lengkap untuk images_blog jika ada
        if ($blog->images_blog) {
            $blog->images_blog = Storage::disk('public')->url($blog->images_blog);
        }

        return response()->json($blog);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validasi data yang dikirimkan
        $request->validate([
            'keyword_blog_id' => 'required|exists:keyword_blogs,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'images_blog' => 'nullable|file|mimes:jpg,png,jpeg|max:2048', // Validasi file gambar
            'date' => 'required|date',
        ]);

        // Cari data blog berdasarkan id
        $blog = Blog::findOrFail($id);

        // Proses file upload jika ada
        if ($request->hasFile('images_blog')) {
            // Hapus file gambar lama jika ada
            if ($blog->images_blog) {
                Storage::disk('public')->delete($blog->images_blog);
            }
            $imagePath = $request->file('images_blog')->store('blogs', 'public');
            $blog->images_blog = $imagePath;
        }

        // Update data lainnya
        $blog->keyword_blog_id = $request->keyword_blog_id;
        $blog->title = $request->title;
        $blog->description = $request->description;
        $blog->date = $request->date;
        $blog->save();

        // Ubah path menjadi URL lengkap
        $blog->images_blog = $blog->images_blog ? Storage::disk('public')->url($blog->images_blog) : null;

        return response()->json($blog);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Hapus data blog berdasarkan id
        $blog = Blog::findOrFail($id);

        // Hapus file gambar jika ada
        if ($blog->images_blog) {
            Storage::disk('public')->delete($blog->images_blog);
        }

        $blog->delete();

        return response()->json(null, 204);
    }
}
