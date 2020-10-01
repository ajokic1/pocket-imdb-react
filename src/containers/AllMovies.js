import React, { useEffect } from "react";
import Loader from "../component/Loader";
import Filters from "../component/Filters";
import MovieList from "../component/movies/MovieList";
import PaginationControl from "../component/PaginationControl";
import PopularMovies from "../component/movies/PopularMovies";
import SidebarLayout from "../component/SidebarLayout";
import { connect } from "react-redux";
import { getMovies } from "../store/actions/MovieActions";
import { addToWatchlist } from "../store/actions/WatchlistActions";
import WatchlistActions from "../component/movies/WatchlistActions";

function AllMovies({ movies, getMovies, addToWatchlist }) {
  useEffect(() => {
    getMovies();
  }, []);

  if (!movies) return <div></div>;

  const left = (
    <>
      {movies.loading && (
        <div className="text-center py-5">
          <Loader />
        </div>
      )}
      {!movies.loading && (
        <div>
          <MovieList
            movies={movies.data ? movies.data : []}
            actions={movie => <WatchlistActions movie={movie} />}
          />
        </div>
      )}
      <PaginationControl data={movies} getData={getMovies} />
    </>
  );

  return (
    <SidebarLayout
      top={() => <Filters />}
      left={() => left}
      sidebarContents={() => <PopularMovies />}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = {
  getMovies,
  addToWatchlist,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);
