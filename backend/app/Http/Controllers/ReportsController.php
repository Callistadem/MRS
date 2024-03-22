<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Report;
use App\Models\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

/**
 * Controller class that handles the api calls for reports
 */

class ReportsController extends Controller
{
    /**
     * Gets all reports in the database without filters
     */
    public function getAllReports() {
        $reports = Report::all();

        return response()->json($reports, 200);
    }

    /**
     * Creates a new report (TODO)
     */
    public function createReport(Request $request) {
        $report = new Report;
        $report->description = $request->description;
        $report->status = 0;
        $report->priority = $request->priority;
        $report->submitter_email = $request->submitter_email;
        // TODO: Responses
        $report->save();

        response()->json("Succesfully saved report", 200);
    } 
}
