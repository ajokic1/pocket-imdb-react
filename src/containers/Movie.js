import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MovieInfo from "../component/movies/MovieInfo";
import { getMovie } from "../store/actions/SingleMovieActions";
import SidebarLayout from "../component/SidebarLayout";
import RelatedMovies from "../component/movies/RelatedMovies";

function Movie({ movie, getMovie, match }) {
  useEffect(() => {
    getMovie(match.params.id);
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
    movie: state.movie,
  };
};

const mapDispatchToProps = {
  getMovie,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));
