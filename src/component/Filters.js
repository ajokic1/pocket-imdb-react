import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getGenres } from "../store/actions/GenreActions"

function Filters({ getGenres, genres }) {
  const genreOptions = genres.map(genre => (
    <option value={genre.id} key={genre.id}>{genre.name}</option>
  ));
  
  useEffect(() => {
    getGenres();
  }, [])

  return (
    <div className="mb-3 p-2">
      <form className="form-inline">
        <strong>Filter by genre</strong>
        <select className="custom-select ml-3" aria-label="Genre">
          {genreOptions}
        </select>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    genres: state.genre,
  };
};

const mapDispatchToProps = {
  getGenres,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filters));