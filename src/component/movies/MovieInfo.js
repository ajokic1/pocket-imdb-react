import React from "react";
import Likes from "./Likes";
import Loader from "./Loader";

function MovieInfo({ movie }) {
  if (!movie) return <div />;

  if (movie.loading)
    return (
      <div className="text-center py-5">
        <Loader />
      </div>
    );

  return (
    <>
      <h1>{movie.title}</h1>
      <h3>{movie.genre}</h3>
      <div className="mb-3">
        <span className="text-muted">Viewed {movie.visits} times</span>
      </div>
      <div>
        <Likes movie={movie} />
      </div>
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
    </>
  );
}

export default MovieInfo;
