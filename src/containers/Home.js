import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getMovies } from "../store/actions/MovieActions";
import Filters from "../component/Filters";
import MovieList from "../component/MovieList";
import Sidebar from "../component/Sidebar";
import Card from "../component/Card";

class Home extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div className="bg-light p-3 h-100">
        <Filters />
        <div className="row h-100 m-0">
          <div className="col-md-8 m-0 px-3 h-100 overflow-auto">
            <MovieList movies={this.props.movies} />
          </div>
          <div className="col-md-4 p-0 pr-3">
            <Card>
              <Sidebar />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movie.all,
  };
};

const mapDispatchToProps = {
  getMovies,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
