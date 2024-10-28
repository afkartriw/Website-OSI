<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Mengambil semua data service
        $services = Service::all();

        // Menambahkan URL lengkap untuk icon_service, icon_service2, dan images_service jika ada
        $services->transform(function ($service) {
            if ($service->icon_service) {
                $service->icon_service = Storage::disk('public')->url($service->icon_service);
            }
            if ($service->icon_service2) {
                $service->icon_service2 = Storage::disk('public')->url($service->icon_service2);
            }
            if ($service->images_service) {
                $service->images_service = Storage::disk('public')->url($service->images_service);
            }
            return $service;
        });

        return response()->json($services);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data yang dikirimkan
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'icon_service' => 'nullable|file|mimes:jpg,png,jpeg,svg|max:2048', // Validasi file icon_service
            'icon_service2' => 'nullable|file|mimes:jpg,png,jpeg,svg|max:2048', // Validasi file icon_service2
            'images_service' => 'nullable|file|mimes:jpg,png,jpeg|max:5120', // Validasi file images_service
        ]);

        // Proses file upload
        $iconPath = null;
        $iconPath2 = null;
        $imagesPath = null;
        if ($request->hasFile('icon_service')) {
            $iconPath = $request->file('icon_service')->store('icons', 'public');
        }
        if ($request->hasFile('icon_service2')) {
            $iconPath2 = $request->file('icon_service2')->store('icons', 'public');
        }
        if ($request->hasFile('images_service')) {
            $imagesPath = $request->file('images_service')->store('images', 'public');
        }

        // Buat data service baru
        $service = Service::create([
            'name' => $request->name,
            'description' => $request->description,
            'icon_service' => $iconPath,
            'icon_service2' => $iconPath2,
            'images_service' => $imagesPath,
        ]);

        // Ubah path menjadi URL lengkap
        $service->icon_service = $iconPath ? Storage::disk('public')->url($iconPath) : null;
        $service->icon_service2 = $iconPath2 ? Storage::disk('public')->url($iconPath2) : null;
        $service->images_service = $imagesPath ? Storage::disk('public')->url($imagesPath) : null;

        return response()->json($service, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Tampilkan data service berdasarkan id
        $service = Service::findOrFail($id);

        // Tambahkan URL lengkap untuk icon_service, icon_service2, dan images_service jika ada
        if ($service->icon_service) {
            $service->icon_service = Storage::disk('public')->url($service->icon_service);
        }
        if ($service->icon_service2) {
            $service->icon_service2 = Storage::disk('public')->url($service->icon_service2);
        }
        if ($service->images_service) {
            $service->images_service = Storage::disk('public')->url($service->images_service);
        }

        return response()->json($service);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validasi data yang dikirimkan
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'icon_service' => 'nullable|file|mimes:jpg,png,jpeg,svg|max:2048', // Validasi file icon_service
            'icon_service2' => 'nullable|file|mimes:jpg,png,jpeg,svg|max:2048', // Validasi file icon_service2
            'images_service' => 'nullable|file|mimes:jpg,png,jpeg|max:5120', // Validasi file images_service
        ]);

        // Cari data service berdasarkan id
        $service = Service::findOrFail($id);

        // Proses file upload jika ada
        if ($request->hasFile('icon_service')) {
            // Hapus file icon lama jika ada
            if ($service->icon_service) {
                Storage::disk('public')->delete($service->icon_service);
            }
            $iconPath = $request->file('icon_service')->store('icons', 'public');
            $service->icon_service = $iconPath;
        }
        if ($request->hasFile('icon_service2')) {
            // Hapus file icon2 lama jika ada
            if ($service->icon_service2) {
                Storage::disk('public')->delete($service->icon_service2);
            }
            $iconPath2 = $request->file('icon_service2')->store('icons', 'public');
            $service->icon_service2 = $iconPath2;
        }
        if ($request->hasFile('images_service')) {
            // Hapus file images lama jika ada
            if ($service->images_service) {
                Storage::disk('public')->delete($service->images_service);
            }
            $imagesPath = $request->file('images_service')->store('images', 'public');
            $service->images_service = $imagesPath;
        }

        // Update data lainnya
        $service->name = $request->name;
        $service->description = $request->description;
        $service->save();

        // Ubah path menjadi URL lengkap
        $service->icon_service = $service->icon_service ? Storage::disk('public')->url($service->icon_service) : null;
        $service->icon_service2 = $service->icon_service2 ? Storage::disk('public')->url($service->icon_service2) : null;
        $service->images_service = $service->images_service ? Storage::disk('public')->url($service->images_service) : null;

        return response()->json($service);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Hapus data service berdasarkan id
        $service = Service::findOrFail($id);

        // Hapus file icon dan images jika ada
        if ($service->icon_service) {
            Storage::disk('public')->delete($service->icon_service);
        }
        if ($service->icon_service2) {
            Storage::disk('public')->delete($service->icon_service2);
        }
        if ($service->images_service) {
            Storage::disk('public')->delete($service->images_service);
        }

        $service->delete();

        return response()->json(null, 204);
    }
}
