import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { MOVIES, SINGLE_MOVIE } from "../constants/routes";

import { getMovies } from "../store/actions/MovieActions";
import AllMovies from "./AllMovies";
import Movie from "./Movie";

function Movies({ movies, getMovies }) {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Switch>
      <Route exact path={MOVIES}>
        <AllMovies movies={movies} getMovies={getMovies}/>
      </Route> 
      <Route path={SINGLE_MOVIE}>
        <Movie movies={movies}/>
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = {
  getMovies,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies));
