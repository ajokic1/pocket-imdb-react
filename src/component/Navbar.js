import React from "react";
import { Link } from "react-router-dom";
import { MOVIES } from "../constants/routes";
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
        <ul className="navbar-nav mr-auto"></ul>
        <div>
          <div className="text-light mb-3 text-right">
            <UserControls />
          </div>
          <Search/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
