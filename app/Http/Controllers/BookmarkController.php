<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Bookmark;
use Illuminate\Support\Facades\Auth;

class BookmarkController extends Controller
{
    public function index(){
        $bookmarks = Bookmark::query()->where('user_id', Auth::User()->id)->get();
        return Inertia::render('Bookmark/List/index', [ 'bookmarks' => $bookmarks]);
    }
}
