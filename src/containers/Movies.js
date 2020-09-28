import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import { getMovies } from "../store/actions/MovieActions";
import AllMovies from "./AllMovies";
import Movie from "./Movie";

function Movies({ movies, getMovies }) {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Switch>
      <Route exact path="/movies">
        <AllMovies movies={movies} getMovies={getMovies}/>
      </Route> 
      <Route path="/movies/:page/:id">
        <Movie movies={movies}/>
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movie,
  };
};

const mapDispatchToProps = {
  getMovies,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies));
