import React from "react";
import { SHIMMER_IMAGE_URL } from "../constants";

export default function ShimmerMenu() {
  return (
    <>
      <div className=" flex  p-16 space-x-6 justify-center mt-24 bg-gray-900 text-gray-100">
        <img className="w-96 rounded-md " src={SHIMMER_IMAGE_URL} />
        <div className="justify-center space-y-3 ">
          <h1 className="text-4xl font-semibold ">
            <img src={SHIMMER_IMAGE_URL} className=" w-60 h-8 rounded-md " />
          </h1>
          <h3 className="text-2xl w-52 ">
            <img src={SHIMMER_IMAGE_URL} className="w-52 h-6 rounded-md" />
          </h3>
          <h3 className="text-2xl w-52 ">
            <img src={SHIMMER_IMAGE_URL} className="w-36 h-6 rounded-md" />
          </h3>
          <h3 className="text-2xl w-52 ">
            <img src={SHIMMER_IMAGE_URL} className="w-40 h-6 rounded-md" />
          </h3>
        </div>
      </div>

      <div className="p-4 text-center m-4 ">
        <input
          data-testid="search-input"
          type="text"
          className="mx-3 p-2 px-2 w-96 border border-gray-200 rounded-md hover:border  "
          placeholder="Search"
        />

        <button
          data-testid="search-btn"
          className=" p-2 px-4 bg-gray-700 text-white rounded-md hover:shadow-md"
          onClick={() => {
            // need to filter the data
            // const data = filterMenuData(searchText, restaurantMenu);
            // update the state - restaurants
            // setResst(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex p-4 space-x-10 justify-center  mt-10 ">
        <img src={SHIMMER_IMAGE_URL} className="w-48  rounded-md" />
        <div className="flex flex-col space-y-2">
          <img src={SHIMMER_IMAGE_URL} className="w-24 h-6 rounded-md " />
          <img src={SHIMMER_IMAGE_URL} className="w-14  h-6  rounded-md" />
        </div>
        <img src={SHIMMER_IMAGE_URL} className="w-10 h-8 rounded-md " />
      </div>
    </>
  );
}
