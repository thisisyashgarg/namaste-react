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
