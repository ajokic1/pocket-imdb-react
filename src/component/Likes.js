import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { rateMovie } from "../store/actions/MovieActions";

function Likes({ movie, rateMovie }) {
  function handleLike(event) {
    event.preventDefault();
    if (movie.like_value === 1) rateMovie(movie.id, 0);
    else rateMovie(movie.id, 1);
  }

  function handleDislike(event) {
    event.preventDefault();
    if (movie.like_value === -1) rateMovie(movie.id, 0);
    else rateMovie(movie.id, -1);
  }

  const likeStyle = {
    cursor: "pointer",
    fontWeight: movie.like_value === 1 ? "bold" : "normal",
    color: movie.like_value === 1 ? "#0275d8" : "gray",
  };

  const dislikeStyle = {
    cursor: "pointer",
    marginLeft: "1rem",
    fontWeight: movie.like_value === -1 ? "bold" : "normal",
    color: movie.like_value === -1 ? "#d9534f" : "gray",
  };

  return (
    <span>
      <span onClick={handleLike} style={likeStyle}>
        <i
          className={
            (movie.like_value === 1 ? "fas" : "far") + " fa-thumbs-up mr-2"
          }
        ></i>
        {movie.likes}
      </span>
      <span onClick={handleDislike} style={dislikeStyle}>
        <i
          className={
            (movie.like_value === -1 ? "fas" : "far") + " fa-thumbs-down mr-2"
          }
        ></i>
        {movie.dislikes}
      </span>
    </span>
  );
}

const mapDispatchToProps = {
  rateMovie,
};

export default withRouter(connect(null, mapDispatchToProps)(Likes));
