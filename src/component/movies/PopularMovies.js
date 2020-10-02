import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SINGLE_MOVIE } from "../../constants/routes";

function PopularMovies({ popular }) {
  const popularLinks = popular.map((movie) => (
    <p>
      <Link to={SINGLE_MOVIE.replace(":id", movie.id)}>{movie.title}</Link>
    </p>
  ));

  return (
    <>
      <h4 className="mb-4">Popular movies</h4>
      {popularLinks}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    popular: state.movies.popular,
  };
};

export default connect(mapStateToProps)(PopularMovies);
