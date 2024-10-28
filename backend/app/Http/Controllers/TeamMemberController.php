<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TeamMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teamMembers = TeamMember::all();

        // Convert photo path to full URL if photo exists
        $teamMembers->transform(function ($teamMember) {
            if ($teamMember->photo) {
                $teamMember->photo = Storage::disk('public')->url($teamMember->photo);
            }
            return $teamMember;
        });

        return response()->json($teamMembers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'photo' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
        ]);

        // Process file upload if present
        $photoPath = $request->file('photo') ? $request->file('photo')->store('team_members', 'public') : null;

        // Save to the database
        $teamMember = TeamMember::create([
            'name' => $validatedData['name'],
            'position' => $validatedData['position'],
            'photo' => $photoPath,
        ]);

        // Convert photo path to full URL if photo exists
        $teamMember->photo = $photoPath ? Storage::disk('public')->url($photoPath) : null;

        return response()->json($teamMember, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $teamMember = TeamMember::findOrFail($id);

        // Convert photo path to full URL if photo exists
        $teamMember->photo = $teamMember->photo ? Storage::disk('public')->url($teamMember->photo) : null;

        return response()->json($teamMember);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $teamMember = TeamMember::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'photo' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
        ]);

        // Process file upload if present
        if ($request->hasFile('photo')) {
            if ($teamMember->photo) {
                Storage::disk('public')->delete($teamMember->photo);
            }
            $photoPath = $request->file('photo')->store('team_members', 'public');
            $teamMember->photo = $photoPath;
        }

        // Update other fields
        $teamMember->update($request->except(['photo']));

        // Convert photo path to full URL if photo exists
        $teamMember->photo = $teamMember->photo ? Storage::disk('public')->url($teamMember->photo) : null;

        return response()->json($teamMember);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $teamMember = TeamMember::findOrFail($id);

        // Delete photo if exists
        if ($teamMember->photo) {
            Storage::disk('public')->delete($teamMember->photo);
        }

        $teamMember->delete();

        return response()->json(null, 204);
    }
}
