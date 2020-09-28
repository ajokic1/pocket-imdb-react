import React, { Component } from "react";
import Filters from "../component/Filters";
import Movies from "./Movies";
import SidebarLayout from "./SidebarLayout";
import PopularMovies from "../component/PopularMovies";

class Home extends Component {
  render() {
    return (
      <SidebarLayout
        top = {() => <Filters />}
        left = {() => <Movies />}
        sidebarContents = {() => <PopularMovies />}
      />
    );
  }
}


export default Home;
