import React from "react";

const WelcomePage = () => {
  return <div className="">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Bookmarks</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
    <hr />
    <h1 className="mt-5 text-center">Welcome to Bookmark App</h1>
  </div>
}

export default WelcomePage;
