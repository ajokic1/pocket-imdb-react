import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/actions/AuthActions";
import { LOGIN, REGISTER } from "../constants/routes";

function UserControls({ user, logOut }) { 
  const loggedIn = (
    <span>
      <strong>{user && user.name}</strong>
      <button type="button" onClick={logOut} className="btn btn-outline-light ml-3">
        Log out
      </button>
    </span>
  );

  const notLoggedIn = (
    <span>
      <Link to={LOGIN} className="btn btn-outline-light mr-3" type="button">
        Log in
      </Link>
      <Link to={REGISTER} className="btn btn-outline-light" type="button">
        Register
      </Link>
    </span>
  );

  return <div>{user ? loggedIn : notLoggedIn}</div>;
}
const mapStateToProps = (state) => {
  return {
    user: state.authUser,
  };
};

const mapDispatchToProps = {
  logOut
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserControls));
