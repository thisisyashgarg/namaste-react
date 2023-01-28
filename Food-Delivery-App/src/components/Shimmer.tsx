import React from "react";
import shimmer from "../images/shimmer.png";
const Shimmer = () => {
  return (
    <>
      <div className=" p-4">
        <input
          type="text"
          className="mx-3 p-1 px-2 border border- rounded-sm "
          placeholder="Type here..."
        />

        <button className=" p-1 px-2 bg-gray-700 text-white rounded-md">
          Search
        </button>
      </div>
      <div className="flex flex-wrap m-0 p-0">
        {Array(10)
          .fill("")
          .map((e, index) => (
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
