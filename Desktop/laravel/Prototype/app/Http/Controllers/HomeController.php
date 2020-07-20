<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\group;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $Group=group::all();
        
        return view('home',['Group'=>$Group]);
    }

    public function project()
    {
        return view('project');
    }

    public function group()
    {
        return view('group');
    }
}
