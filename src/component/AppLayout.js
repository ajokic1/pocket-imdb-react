import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "../containers/auth/Login";
import Register from "../containers/auth/Register";
import { authUser } from "../store/actions/AuthActions";
import Navbar from "./Navbar";
import Movies from "../containers/Movies";
import { HOME, LOGIN, MOVIES, REGISTER } from "../constants/routes";

class AppLayout extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        this.props.history.push(HOME);
      } else {
        this.props.history.push(LOGIN);
      }
    }
  }

  render() {
    return (
      <>
        <Navbar />
        {this.props.user ? (
          <div className="h-100">
            <Switch>
              <Route exact path="/">
                <Redirect to={MOVIES} />
              </Route>
              <Route path={MOVIES} component={Movies} />
            </Switch>
          </div>
        ) : (
          <div>
            <Route exact path={REGISTER} component={Register} />
            <Route exact path={LOGIN} component={Login} />
          </div>
        )}
      </>
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
