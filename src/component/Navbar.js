import React from "react";
import { Link } from "react-router-dom";
import { CREATE_MOVIE, MOVIES, WATCHLIST } from "../constants/routes";
import UserControls from "./UserControls";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="navbar py-3 navbar-expand-lg navbar-dark bg-dark">
      <Link className="h2 text-light strong" to={MOVIES}>
        <strong>PocketIMDB</strong>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-3 mr-auto h4">
          <li class="nav-item">
            <Link class="nav-link" to={MOVIES}>
              Movies
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={WATCHLIST}>
              Watchlist
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={CREATE_MOVIE}>
              Create
            </Link>
          </li>
        </ul>
        <div>
          <div className="text-light mb-3 text-right">
            <UserControls />
          </div>
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
