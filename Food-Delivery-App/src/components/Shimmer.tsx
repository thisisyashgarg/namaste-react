import React from "react";
import shimmer from "../images/shimmer.png";
const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="card" key={index}>
            <img src={shimmer} />
            <h2>Restaurant Name</h2>
            <h3>Cuisines</h3>
            <h4>Distance</h4>
          </div>
        ))}
      ;
    </div>
  );
};

export default Shimmer;
