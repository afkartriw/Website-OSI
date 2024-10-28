<?php
namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    // Menampilkan semua settings
    public function index()
    {
        $settings = Settings::all();

        return response()->json($settings);
    }

    // Menyimpan setting baru
    public function store(Request $request)
    {
        // Validasi request
        $request->validate([
            'description1' => 'required|string|max:255',
            'description2' => 'required|string|max:255',
            'year' => 'required|integer',
            'email' => 'required|string|max:255',
            'phone' => 'required|string|max:15',
            'instagram' => 'nullable|string|max:255',
            'facebook' => 'nullable|string|max:255',
            'linkedln' => 'nullable|string|max:255',
        ]);

        // Simpan data ke dalam database
        $settings = Settings::create([
            'description1' => $request->description1,
            'description2' => $request->description2,
            'year' => $request->year,
            'email' => $request->email,
            'phone' => $request->phone,
            'instagram' => $request->instagram,
            'facebook' => $request->facebook,
            'linkedln' => $request->linkedln,
        ]);

        return response()->json($settings, 201);
    }

    // Menampilkan setting berdasarkan id
    public function show($id)
    {
        $settings = Settings::find($id);

        if (!$settings) {
            return response()->json(['message' => 'Setting not found'], 404);
        }

        return response()->json($settings);
    }

    // Mengupdate setting
    public function update(Request $request, $id)
    {
        $settings = Settings::find($id);
        if (!$settings) {
            return response()->json(['message' => 'Setting not found'], 404);
        }

        // Validasi request
        $request->validate([
            'description1' => 'required|string|max:255',
            'description2' => 'required|string|max:255',
            'year' => 'required|integer',
            'email' => 'required|string|max:255',
            'phone' => 'required|string|max:15',
            'instagram' => 'nullable|string|max:255',
            'facebook' => 'nullable|string|max:255',
            'linkedln' => 'nullable|string|max:255',
        ]);

        // Update data lainnya
        $settings->description1 = $request->description1;
        $settings->description2 = $request->description2;
        $settings->year = $request->year;
        $settings->email = $request->email;
        $settings->phone = $request->phone;
        $settings->instagram = $request->instagram;
        $settings->facebook = $request->facebook;
        $settings->linkedln = $request->linkedln;
        $settings->save();

        return response()->json($settings, 200);
    }

    // Menghapus setting
    public function destroy($id)
    {
        $settings = Settings::find($id);
        if ($settings) {
            $settings->delete();
            return response()->json(['message' => 'Setting deleted successfully'], 200);
        }
        return response()->json(['message' => 'Setting not found'], 404);
    }
}
