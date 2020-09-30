import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";

function SidebarLayout({ top = () => {}, left, sidebarContents }) {
  return (
    <div className="bg-light p-3 h-100">
      {top()}
      <div className="row h-100 m-0">
        <div className="col-md-8 m-0 px-3 h-100 overflow-auto">{left()}</div>
        <div className="col-md-4 p-0 pr-3">
          <Card>
            <Sidebar>{sidebarContents()}</Sidebar>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;
