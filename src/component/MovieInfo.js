import React from "react";
import Likes from "./Likes";

function MovieInfo({ movie }) {
  if (!movie) return <div />;

  return (
    <React.Fragment>
      <h1>{movie.title}</h1>
      <h3>{movie.genre}</h3>
      <div><Likes movie={movie} /></div>
      <div className="mt-5 d-flex flex-row">
        <div>
          <img
            style={{ objectFit: "cover", width: "16rem", height: "16rem" }}
            src={movie.image_url}
            alt="movie cover"
          />
        </div>
        <div className="ml-4">
          <p style={{ whiteSpace: "pre-line" }}>{movie.description}</p>
        </div>
      </div>
      <div className="mt-5">
        <h3>Comments</h3>
      </div>
    </React.Fragment>
  );
}

export default MovieInfo;
