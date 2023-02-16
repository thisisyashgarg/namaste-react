import React from "react";
import { SHIMMER_IMAGE_URL } from "../constants";

const Shimmer = () => {
  return (
    <>
      <div className="p-4 text-center  mt-24">
        <input
          data-testid="search-input"
          type="text"
          className="mx-3 p-2 px-2 w-96 border border-gray-200 rounded-md hover:border  "
          placeholder="Search"
        />

        <button
          data-testid="search-btn"
          className=" p-2 px-4 bg-gray-700 text-white rounded-md hover:shadow-md"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap m-0 p-0" data-testid="shimmer">
        {Array(10)
          .fill("")
          .map((index) => (
            <div className="w-56 p-4 m-3 shadow-lg rounded-md space-y-3">
              <img className="rounded-md" src={SHIMMER_IMAGE_URL} />
              <img className="w-[100%] h-4 rounded" src={SHIMMER_IMAGE_URL} />
              <img className="w-[70%] h-4 rounded" src={SHIMMER_IMAGE_URL} />
              <img className="w-[90%] h-4 rounded" src={SHIMMER_IMAGE_URL} />
              {/* <h2 className="text-2xl font-semibold"> </h2>
              <h3 className="cuisines"> </h3>
              <h4 className="distance"></h4> */}
            </div>
          ))}
        ;
      </div>
    </>
  );
};

export default Shimmer;
