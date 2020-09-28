import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getMovies } from "../store/actions/MovieActions";
import MovieList from "../component/MovieList";
import PaginationControl from "../component/PaginationControl";
import Loader from "react-loader-spinner";

function Movies({ movies, getMovies }) {
  useEffect(() => {
    getMovies();
  }, []);

  if (!movies) return <div></div>;

  return (
    <div className="col-md-8 m-0 px-3 h-100 overflow-auto">
      {movies.loading && (
        <div className="text-center py-5">
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div> 
      )}
      {!movies.loading && movies.data && (
        <div>
          <MovieList movies={movies.data ? movies.data : []} />
        </div>
      )}
      <PaginationControl data={movies} getData={getMovies} />
    </div>
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
