import React, { useEffect } from "react";
import MovieList from "../component/movies/MovieList";
import SidebarLayout from "../component/SidebarLayout";
import { connect } from "react-redux";
import { getWatchlist } from "../store/actions/WatchlistActions";
import WatchlistActions from "../component/movies/WatchlistActions";

function Watchlist({ watchlist, getWatchlist }) {
  useEffect(() => {
    getWatchlist();
  }, []);

  if (!watchlist) return <div></div>;

  const left = (
    <div>
      <MovieList
        movies={watchlist ? watchlist : []}
        actions={(movie) => <WatchlistActions movie={movie} />}
      />
    </div>
  );

  return (
    <SidebarLayout
      top={() => {}}
      left={() => left}
      sidebarContents={() => {}}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    watchlist: state.watchlist,
  };
};

const mapDispatchToProps = {
  getWatchlist,
};

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
