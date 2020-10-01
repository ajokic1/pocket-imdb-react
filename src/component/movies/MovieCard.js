import React from "react";
import Likes from "../Likes";

const MovieCard = ({ movie, actions }) => {
  return (
    <div className="d-flex flex-row">
      <div>
        <img
          style={{ objectFit: "cover", width: "8rem", height: "8rem" }}
          src={movie.image_url}
          alt="movie cover"
        />
      </div>
      <div className="ml-4">
        <div className="mb-3">
          <span className="h4 mr-4">{movie.title}</span>
          <span className="float-right">
            <Likes movie={movie} />
          </span>
        </div>
        <p>{movie.description.truncate(255).s}</p>
        <div>
          <span className="text-muted">
            <small>Viewed {movie.visits} times</small>
            <span className="float-right">{actions(movie)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
