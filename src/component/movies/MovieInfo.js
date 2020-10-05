import React from "react";
import Comments from "../comments/Comments";
import Likes from "../Likes";
import Loader from "../Loader";
import WatchlistActions from "./WatchlistActions";

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
      <div>
        <div>
          <small className="text-muted">Viewed {movie.visits} times</small>
        </div>
        <h1>{movie.title}</h1>
        <span className="float-right">
          <WatchlistActions movie={movie} />
        </span>
      </div>
      <div className="mb-3">{movie.genre_names.join(', ')}</div>
      <div className="mb-3">
        <Likes movie={movie} />
      </div>
      <div className="d-flex flex-row">
        <div>
          <img
            style={{ objectFit: "cover", width: "16rem", height: "16rem" }}
            src={movie.image && movie.image.full_url}
            alt="movie cover"
          />
        </div>
        <div className="ml-4">
          <p style={{ whiteSpace: "pre-line" }}>{movie.description}</p>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="mb-4">Comments</h3>
        <Comments movie={movie} />
      </div>
    </>
  );
}

export default MovieInfo;
