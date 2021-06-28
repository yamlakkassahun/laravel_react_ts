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

        $data = OpenGraph::fetch($postData['link'], true);


        $bookmark = Bookmark::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'type' => $data['type'] || '',
            'url' => $postData['link'],
            'image_url' => $data['image'],
            'user_id' => Auth::user()->id,
        ]);

        return redirect()->route('bookmark.view', ['bookmark' => $bookmark->id]);
    }

    public function view(Bookmark $bookmark){
        if(Auth::user()->id != $bookmark->user_id) {
            abort(401, 'You are not allowed to view this bookmark');
        }
        return Inertia::render('Bookmark/View/index', ['bookmarks' => $bookmark]);
    }
}
