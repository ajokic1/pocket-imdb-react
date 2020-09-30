import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { SINGLE_MOVIE } from "../../constants/routes";
import Card from "../Card";

function MovieList({ movies, page }) {
  const renderMovies = () => {
    return movies.map((movie) => (
      <Link
        key={movie.id}
        className="text-dark text-decoration-none"
        to={SINGLE_MOVIE.replace(":id", movie.id)}
      >
        <Card>
          <MovieCard movie={movie} />
        </Card>
      </Link>
    ));
  };

  return renderMovies();
}

export default MovieList;
