import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { rateMovie } from "../store/actions/MovieActions";
import { LIKE, DISLIKE, UNLIKE } from "../constants";

function Likes({ movie, rateMovie }) {
  function handleLike(event) {
    event.preventDefault();
    rateMovie(movie.id, movie.like_value === LIKE ? UNLIKE : LIKE );
    
  }

  function handleDislike(event) {
    event.preventDefault();
    rateMovie(movie.id, movie.like_value === DISLIKE ? UNLIKE : DISLIKE );
  }

  const likeStyle = {
    cursor: "pointer",
    fontWeight: movie.like_value === LIKE ? "bold" : "normal",
    color: movie.like_value === LIKE ? "#0275d8" : "gray",
  };

  const dislikeStyle = {
    cursor: "pointer",
    marginLeft: "1rem",
    fontWeight: movie.like_value === DISLIKE ? "bold" : "normal",
    color: movie.like_value === DISLIKE ? "#d9534f" : "gray",
  };

  return (
    <span>
      <span onClick={handleLike} style={likeStyle}>
        <i
          className={
            (movie.like_value === LIKE ? "fas" : "far") + " fa-thumbs-up mr-2"
          }
        ></i>
        {movie.likes}
      </span>
      <span onClick={handleDislike} style={dislikeStyle}>
        <i
          className={
            (movie.like_value === DISLIKE ? "fas" : "far") + " fa-thumbs-down mr-2"
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
