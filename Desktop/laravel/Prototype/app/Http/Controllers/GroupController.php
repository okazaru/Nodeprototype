<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\group;

class GroupController extends Controller
{
    public function index()
    {
        return view('creategroup');
    }

    public function addData(Request $request)
    {
        group::create($request->all());
        return redirect()->route('home');
    }
}