import React, { Component } from "react";
import Filters from "../component/Filters";
import Sidebar from "../component/Sidebar";
import Card from "../component/Card";
import Movies from "./Movies";

class Home extends Component {
  render() {
    return (
      <div className="bg-light p-3 h-100">
        <Filters />
        <div className="row h-100 m-0">
          <Movies/>
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


export default Home;
