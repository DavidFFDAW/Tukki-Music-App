<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;

class TestController extends Controller
{
    public function getAllUsers(Request $req)
    {
        if ($req->token == '1234') {
            return User::all();
        } else {
            return response()->json(['error' => 'Invalid Token Passed']);
        }
    }
}
