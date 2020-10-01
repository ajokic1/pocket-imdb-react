import React from "react";
import { Route, Switch } from "react-router-dom";
import { MOVIES, SINGLE_MOVIE, WATCHLIST } from "../constants/routes";
import AllMovies from "./AllMovies";
import Movie from "./Movie";
import Watchlist from "./Watchlist";

function Movies() {
  return (
    <Switch>
      <Route exact path={MOVIES}>
        <AllMovies/>
      </Route>
      <Route path={WATCHLIST}>
        <Watchlist />
      </Route> 
      <Route path={SINGLE_MOVIE}>
        <Movie/>
      </Route>
    </Switch>
  );
}

export default Movies;
