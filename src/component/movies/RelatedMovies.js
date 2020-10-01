import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SINGLE_MOVIE } from '../../constants/routes';

function RelatedMovies({ related }) {
  const relatedLinks = related.map((movie) => (
    <p>
      <Link to={SINGLE_MOVIE.replace(":id", movie.id)}>{movie.title}</Link>
    </p>
  ));

  return (
    <>
      <h4 className="mb-4">Related movies by genre:</h4>
      {relatedLinks}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    related: state.movie.related,
  };
};

export default connect(mapStateToProps)(RelatedMovies);

