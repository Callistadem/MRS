<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReportsController extends Controller
{
    public function getReport() {
        return response()->json(["data here"], 200);
    }
}