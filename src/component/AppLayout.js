import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Login from "../containers/auth/Login";
import Register from "../containers/auth/Register";
import Home from "../containers/Home";
import { authUser } from "../store/actions/AuthActions";
import Navbar from "./Navbar";
import Movie from "../containers/Movie";

class AppLayout extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        this.props.history.push("/");
      } else {
        this.props.history.push("/login");
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.props.user ? (
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        ) : (
          <div>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authUser,
  };
};

const mapDispatchToProps = () => {
  return {
    authUser,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppLayout)
);
