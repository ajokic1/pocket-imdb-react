import React from "react";

function Filters() {
  return (
    <div className="mb-3 p-2">
      <form className="form-inline">
        <strong>Filter by genre</strong>
        <select className="custom-select ml-3" aria-label="Genre">
          <option>Action</option>
          <option>Drama</option>
          <option>Comedy</option>
        </select>
      </form>
    </div>
  );
}

export default Filters;
