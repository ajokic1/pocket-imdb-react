import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar py-3 navbar-expand-lg navbar-dark bg-dark">
      <Link className="h2 text-light strong" to="/">
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
            <Link
              to="/login"
              className="btn btn-outline-light mr-2"
              type="button"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline-light"
              type="button"
            >
              Register
            </Link>
          </div>
          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
