<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    /**
     * Menampilkan semua project.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Ambil parameter category_id dari query string
        $categoryId = $request->query('category_id');
        
        // Jika ada parameter category_id, tampilkan project sesuai category_id
        $query = Project::with(['category', 'perusahaan', 'superiorities']);
        if ($categoryId) {
            $query->where('category_id', $categoryId);
        }
    
        $projects = $query->latest()->get();
    
        // Tambahkan URL lengkap untuk gambar project
        $projects->transform(function ($project) {
            if ($project->picture) {
                $project->picture = Storage::disk('public')->url($project->picture);
            }
            foreach (['picture01', 'picture02', 'picture03', 'picture04'] as $pictureField) {
                if ($project->$pictureField) {
                    $project->$pictureField = Storage::disk('public')->url($project->$pictureField);
                }
            }
            return $project;
        });
    
        return response()->json($projects);
    }
    
    /**
     * Menyimpan project baru.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validasi request
        $request->validate([
            'name_project' => 'required|string|max:255',
            'sub_title' => 'required|string|max:255',
            'category_id' => 'required|exists:project_categories,id_category',
            'perusahaan_id' => 'required|exists:perusahaans,id',
            'picture' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'description1' => 'required|string',
            'tanggal' => 'required|date',
            'picture01' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'picture02' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'picture03' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'picture04' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'description2' => 'nullable|string',
            'description3' => 'nullable|string',
        ]);

        // Proses file upload
        $picturePath = $request->file('picture') ? $request->file('picture')->store('projects', 'public') : null;
        $picture01Path = $request->file('picture01') ? $request->file('picture01')->store('projects', 'public') : null;
        $picture02Path = $request->file('picture02') ? $request->file('picture02')->store('projects', 'public') : null;
        $picture03Path = $request->file('picture03') ? $request->file('picture03')->store('projects', 'public') : null;
        $picture04Path = $request->file('picture04') ? $request->file('picture04')->store('projects', 'public') : null;

        // Simpan data ke dalam database
        $project = Project::create([
            'name_project' => $request->name_project,
            'sub_title'=> $request->sub_title,
            'category_id' => $request->category_id,
            'perusahaan_id' => $request->perusahaan_id,
            'picture' => $picturePath,
            'description1' => $request->description1,
            'tanggal' => $request->tanggal,
            'picture01' => $picture01Path,
            'picture02' => $picture02Path,
            'picture03' => $picture03Path,
            'picture04' => $picture04Path,
            'description2' => $request->description2,
            'description3' => $request->description3,
        ]);

        // Ubah path menjadi URL lengkap
        $project->picture = $picturePath ? Storage::disk('public')->url($picturePath) : null;
        foreach (['picture01', 'picture02', 'picture03', 'picture04'] as $pictureField) {
            if ($project->$pictureField) {
                $project->$pictureField = Storage::disk('public')->url($project->$pictureField);
            }
        }

        return response()->json($project, 201);
    }

    /**
     * Menampilkan project berdasarkan id.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Memuat project beserta relasi kategori, perusahaan, dan superiorities
        $project = Project::with(['category', 'perusahaan', 'superiorities'])->find($id);
        
        if ($project) {
            // Mengubah path gambar utama project
            $project->picture = $project->picture ? Storage::disk('public')->url($project->picture) : null;
            
            // Mengubah path gambar lain (picture01, picture02, picture03, picture04)
            foreach (['picture01', 'picture02', 'picture03', 'picture04'] as $pictureField) {
                if ($project->$pictureField) {
                    $project->$pictureField = Storage::disk('public')->url($project->$pictureField);
                }
            }
            
            // Mengubah path logo_superiority untuk setiap item di superiorities
            if ($project->superiorities) {
                foreach ($project->superiorities as $superiority) {
                    if ($superiority->logo_superiority) {
                        // Ubah logo_superiority menjadi URL yang bisa diakses
                        $superiority->logo_superiority = Storage::disk('public')->url($superiority->logo_superiority);
                    }
                }
            }
    
            return response()->json($project);
        }
    
        return response()->json(['message' => 'Project not found'], 404);
    }
    
    /**
     * Mengupdate project berdasarkan id.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $project = Project::find($id);
        if (!$project) {
            return response()->json(['message' => 'Project not found'], 404);
        }

        // Validasi request
        $request->validate([
            'name_project' => 'required|string|max:255',           
            'sub_title' => 'required|string|max:255',
            'category_id' => 'required|exists:project_categories,id_category',
            'perusahaan_id' => 'required|exists:perusahaans,id',
            'picture' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'description1' => 'required|string',
            'tanggal' => 'required|date',
            'picture01' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'picture02' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'picture03' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'picture04' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'description2' => 'nullable|string',
            'description3' => 'nullable|string',
        ]);

        // Proses file upload jika ada
        if ($request->hasFile('picture')) {
            if ($project->picture) {
                Storage::disk('public')->delete($project->picture);
            }
            $project->picture = $request->file('picture')->store('projects', 'public');
        }
        foreach (['picture01', 'picture02', 'picture03', 'picture04'] as $pictureField) {
            if ($request->hasFile($pictureField)) {
                if ($project->$pictureField) {
                    Storage::disk('public')->delete($project->$pictureField);
                }
                $project->$pictureField = $request->file($pictureField)->store('projects', 'public');
            }
        }

        // Update data lainnya
        $project->update($request->except(['picture', 'picture01', 'picture02', 'picture03', 'picture04']));

        // Ubah path menjadi URL lengkap
        $project->picture = $project->picture ? Storage::disk('public')->url($project->picture) : null;
        foreach (['picture01', 'picture02', 'picture03', 'picture04'] as $pictureField) {
            if ($project->$pictureField) {
                $project->$pictureField = Storage::disk('public')->url($project->$pictureField);
            }
        }

        return response()->json($project, 200);
    }

    /**
     * Menghapus project berdasarkan id.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::find($id);
        if ($project) {
            // Hapus file gambar jika ada
            foreach (['picture', 'picture01', 'picture02', 'picture03', 'picture04'] as $pictureField) {
                if ($project->$pictureField) {
                    Storage::disk('public')->delete($project->$pictureField);
                }
            }

            $project->delete();
            return response()->json(['message' => 'Project deleted successfully'], 200);
        }

        return response()->json(['message' => 'Project not found'], 404);
    }
}
