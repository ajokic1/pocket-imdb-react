import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../component/MovieCard";
import Card from "./Card";

function MovieList({ movies }) {
  const renderMovies = () => {
    return movies.map((movie) => (
      <Link
        className="text-dark text-decoration-none"
        to={`/movie/${movie.id}`}
      >
        <Card>
          <MovieCard key={movie.id} movie={movie} />
        </Card>
      </Link>
    ));
  };

  return renderMovies();
}

export default MovieList;
