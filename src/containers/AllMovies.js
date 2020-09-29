import React from "react";
import Loader from "react-loader-spinner";
import Filters from "../component/Filters";
import MovieList from "../component/MovieList";
import PaginationControl from "../component/PaginationControl";
import PopularMovies from "../component/PopularMovies";
import SidebarLayout from "../component/SidebarLayout";

function AllMovies({ movies, getMovies }) {
  if (!movies) return <div></div>;

  const left = (
    <React.Fragment>
      {movies.loading && (
        <div className="text-center py-5">
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      )}
      {!movies.loading && movies.data && (
        <div>
          <MovieList
            page={movies.current_page}
            movies={movies.data ? movies.data : []}
          />
        </div>
      )}
      <PaginationControl data={movies} getData={getMovies} />
    </React.Fragment>
  );

  return (
    <SidebarLayout
      top={() => <Filters />}
      left={() => left}
      sidebarContents={() => <PopularMovies />}
    />
  );
}

export default AllMovies;
