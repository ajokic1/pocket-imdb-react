import React from "react";
import Loader from "../component/Loader";
import Filters from "../component/Filters";
import MovieList from "../component/MovieList";
import PaginationControl from "../component/PaginationControl";
import PopularMovies from "../component/PopularMovies";
import SidebarLayout from "../component/SidebarLayout";

function AllMovies({ movies, getMovies }) {
  if (!movies) return <div></div>;

  const left = (
    <>
      {movies.loading && (
        <div className="text-center py-5">
          <Loader />
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

export default AllMovies;
