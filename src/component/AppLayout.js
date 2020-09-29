import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "../containers/auth/Login";
import Register from "../containers/auth/Register";
import { authUser } from "../store/actions/AuthActions";
import Navbar from "./Navbar";
import Movies from "../containers/Movies";

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
          <div className="h-100">
            <Route exact path="/"><Redirect to="/movies"/></Route>
            <Route path="/movies" component={Movies} />
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
