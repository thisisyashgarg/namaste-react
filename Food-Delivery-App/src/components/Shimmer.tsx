import React from "react";
import shimmer from "../images/shimmer.png";
const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap m-0 p-0" data-testid="shimmer">
        {Array(10)
          .fill("")
          .map((index) => (
            <div className="w-56 p-4 m-3 shadow-lg rounded-md">
              <img className="rounded-md" src={shimmer} />
              <h2 className="text-2xl font-semibold">_____________</h2>
              <h3 className="cuisines">__________________</h3>
              <h4 className="distance">📍 _____________ away</h4>
            </div>
          ))}
        ;
      </div>
    </>
  );
};

export default Shimmer;
