import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { filterMovies } from "../store/actions/MovieActions";

function Search({ filterMovies }) {
  const [search, setSearch] = useState("");

  const debouncedFilter = useCallback(debounce(search => {
    filterMovies({ title: search });
  }, 750), [filterMovies]);
  
  function handleSearch(event) {
    const value = event.target.value
    setSearch(value);
    debouncedFilter(value);
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
