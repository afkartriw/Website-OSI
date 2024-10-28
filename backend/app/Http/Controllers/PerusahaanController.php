<?php

namespace App\Http\Controllers;

use App\Models\Perusahaan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PerusahaanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Mengambil semua data perusahaan
        $perusahaans = Perusahaan::all();

        // Menambahkan URL lengkap untuk logo jika ada
        $perusahaans->transform(function ($perusahaan) {
            if ($perusahaan->logo) {
                $perusahaan->logo = Storage::disk('public')->url($perusahaan->logo);
            }
            return $perusahaan;
        });

        return response()->json($perusahaans);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data yang dikirimkan
        $request->validate([
            'nama_perusahaan' => 'required|string|max:255',
            'logo' => 'nullable|file|mimes:jpg,png,jpeg|max:2048', // Validasi file logo
            'testimony' => 'nullable|string',
            'nama_client' => 'nullable|string|max:255',
            'role' => 'nullable|string|max:255',
        ]);

        // Proses file upload
        $logoPath = null;
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('logos', 'public');
        }

        // Buat data perusahaan baru
        $perusahaan = Perusahaan::create([
            'nama_perusahaan' => $request->nama_perusahaan,
            'logo' => $logoPath,
            'testimony' => $request->testimony,
            'nama_client' => $request->nama_client,
            'role' => $request->role,
        ]);

        // Ubah path menjadi URL lengkap
        $perusahaan->logo = $logoPath ? Storage::disk('public')->url($logoPath) : null;

        return response()->json($perusahaan, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Tampilkan data perusahaan berdasarkan id
        $perusahaan = Perusahaan::findOrFail($id);

        // Tambahkan URL lengkap untuk logo jika ada
        if ($perusahaan->logo) {
            $perusahaan->logo = Storage::disk('public')->url($perusahaan->logo);
        }

        return response()->json($perusahaan);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validasi data yang dikirimkan
        $request->validate([
            'nama_perusahaan' => 'required|string|max:255',
            'logo' => 'nullable|file|mimes:jpg,png,jpeg|max:2048', // Validasi file logo
            'testimony' => 'nullable|string',
            'nama_client' => 'nullable|string|max:255',
            'role' => 'nullable|string|max:255',
        ]);

        // Cari data perusahaan berdasarkan id
        $perusahaan = Perusahaan::findOrFail($id);

        // Proses file upload jika ada
        if ($request->hasFile('logo')) {
            // Hapus file logo lama jika ada
            if ($perusahaan->logo) {
                Storage::disk('public')->delete($perusahaan->logo);
            }
            $logoPath = $request->file('logo')->store('logos', 'public');
            $perusahaan->logo = $logoPath;
        }

        // Update data lainnya
        $perusahaan->nama_perusahaan = $request->nama_perusahaan;
        $perusahaan->testimony = $request->testimony;
        $perusahaan->nama_client = $request->nama_client;
        $perusahaan->role = $request->role;
        $perusahaan->save();

        // Ubah path menjadi URL lengkap
        $perusahaan->logo = $perusahaan->logo ? Storage::disk('public')->url($perusahaan->logo) : null;

        return response()->json($perusahaan);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Hapus data perusahaan berdasarkan id
        $perusahaan = Perusahaan::findOrFail($id);

        // Hapus file logo jika ada
        if ($perusahaan->logo) {
            Storage::disk('public')->delete($perusahaan->logo);
        }

        $perusahaan->delete();

        return response()->json(null, 204);
    }
}
