import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MovieInfo from "../component/MovieInfo";
import { getMovies } from "../store/actions/MovieActions";
import SidebarLayout from "./SidebarLayout";
import RelatedMovies from "../component/RelatedMovies";

function Movie({ movies, getMovies, match }) {
  const movie = movies
    ? movies.data.find((movie) => movie.id == match.params.id)
    : {};

  useEffect(() => {
    getMovies(match.params.page);
  }, []);

  return (
    <SidebarLayout
      left={() => <MovieInfo movie={movie} />}
      sidebarContents={() => <RelatedMovies />}
    />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));
