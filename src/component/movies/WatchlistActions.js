import React from "react";
import { connect } from "react-redux";
import {
  setWatched,
  removeFromWatchlist,
  addToWatchlist,
} from "../../store/actions/WatchlistActions";
import "../../styles/css/WatchlistActions.css";

function WatchlistActions({
  movie,
  setWatched,
  removeFromWatchlist,
  addToWatchlist,
}) {
  function handleRemove(event) {
    event.preventDefault();
    removeFromWatchlist(movie.id);
  }

  function handleSetWatched(event, watched) {
    event.preventDefault();
    setWatched(movie.id, watched);
  }

  function handleAddToWatchlist(event) {
    event.preventDefault();
    addToWatchlist(movie.id);
  }

  if (movie.in_watchlist)
    return (
      <>
        <span className="action-button" onClick={handleRemove}>
          <i className="fas fa-minus mr-2"></i>Remove from watchlist
        </span>
        <span className="ml-3 action-button">
          <span
            className={movie.watched && "text-primary font-weight-bold"}
            onClick={(event) => handleSetWatched(event, !movie.watched)}
          >
            <i className="fas fa-tv mr-2"></i>
            {movie.watched ? "Watched" : "Not watched"}
          </span>
        </span>
      </>
    );

  return (
    <span
      className="action-button"
      onClick={handleAddToWatchlist}
    >
      <i className="fas fa-plus mr-2"></i>Add to watchlist
    </span>
  );
}

const mapDispatchToProps = {
  setWatched,
  removeFromWatchlist,
  addToWatchlist,
};

export default connect(null, mapDispatchToProps)(WatchlistActions);
