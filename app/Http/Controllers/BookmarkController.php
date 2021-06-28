<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use OpenGraph;
use App\Models\Bookmark;
use Illuminate\Support\Facades\Auth;

class BookmarkController extends Controller
{
    public function index(){
        $bookmarks = Bookmark::query()->where('user_id', Auth::User()->id)->get();
        return Inertia::render('Bookmark/List/index', [ 'bookmarks' => $bookmarks]);
    }

    public function add()
    {
        return Inertia::render('Bookmark/Add/index');
    }

    public function getPreviewData(Request $request)
    {
        $postData = $this->validate($request, [
            'link' => ['required'],
        ]);

        $data = OpenGraph::fetch($postData['link']);

        return $data;
    }
}
