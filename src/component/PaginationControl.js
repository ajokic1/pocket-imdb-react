import React from "react";
import "../styles/css/PaginationControl.css";

function PaginationControl({ data, getData }) {
  function createPageNumbersArray() {
    return [...Array(data.last_page || 1).keys()].map((page) => page + 1);
  }

  function handleNextClick() {
    if(data.current_page < data.last_page){
      getData(data.current_page + 1);
    }
  }

  function handlePreviousClick() {
    if(data.current_page > 1){
      getData(data.current_page - 1);
    }
  }

  const pages = createPageNumbersArray().map((page) => (
    <span
      key={page}
      onClick={() => getData(page)}
      className={
        "page-button " +
        (page === data.current_page && "page-button-selected")
      }
    >
      {page}
    </span>
  ));

  return (
    <div className="text-center">
      { pages.length > 1 &&
        <span onClick={handlePreviousClick} className="page-button">Previous</span>}
      {pages}
      { pages.length > 1 &&
        <span onClick={handleNextClick} className="page-button">Next</span>}
    </div>
  );
}

export default PaginationControl;
