import React from "react";

const MovieCard = ({ movie }) => {
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
          <span className="h4">{movie.title}</span>
          <span className="ml-3">rating</span>
        </div>
        <p>{movie.description.truncate(255).s}</p>
      </div>
    </div>
  );
};

export default MovieCard;
