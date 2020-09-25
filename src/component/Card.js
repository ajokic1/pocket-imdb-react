import React from "react";

function Card({ children, className }) {
  return (
    <div className={`p-3 border mb-3 bg-white ${className}`}>{children}</div>
  );
}

export default Card;
