import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import route from "ziggy-js";

const Menu = () => {
  return (
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <InertiaLink className="navbar-brand" href={route('home')}>
            Bookmark
          </InertiaLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <InertiaLink className="nav-link" href={route('bookmark.index')}>Bookmarks</InertiaLink>
                </li>
                <li className="nav-item">
                  <InertiaLink className="nav-link" href={route('bookmark.add')}>Bookmark Add</InertiaLink>
                </li>
              </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <InertiaLink className="nav-link" method="post" href={route('logout')}>Logout</InertiaLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Menu;
