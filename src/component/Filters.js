import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getGenres } from "../store/actions/GenreActions";
import { filterMovies } from "../store/actions/MovieActions";

function Filters({ getGenres, filterMovies, genres }) {
  const genreOptions = genres.map(genre => (
    <option value={genre.id} key={genre.id}>{genre.name}</option>
  ));
  
  useEffect(() => {
    getGenres();
  }, [])

  function handleFilter(event) {
    filterMovies({ genre_id: event.target.value })
  }

  return (
    <div className="mb-3 p-2">
      <form className="form-inline">
        <strong>Filter by genre</strong>
        <select onChange={handleFilter} className="custom-select ml-3" aria-label="Genre">
        <option value={""}>None</option>
          {genreOptions}
        </select>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
  };
};

const mapDispatchToProps = {
  getGenres,
  filterMovies,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filters));