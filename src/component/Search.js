import { debounce } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import { filterMovies } from "../store/actions/MovieActions";

function Search({ filterMovies }) {
  const [search, setSearch] = useState("");
  
  function handleSearch(event) {
    const value = event.target.value
    setSearch(value);
    (debounce(() => {
      filterMovies({ search: value });
    }, 750))();
  }

  return (
    <form className="form-inline">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={handleSearch}
      />
    </form>
  );
}

const mapDispatchToProps = {
  filterMovies,
};

export default connect(null, mapDispatchToProps)(Search);
