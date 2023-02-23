import React from "react";
import { IMG_CDN_URL } from "../constants";

export default function FoodItem({ name, cloudinaryImageId, price }) {
  return (
    <>
      <div className="w-56 p-4 m-3 h-68 border border-gray-100 bg-gray rounded-md overflow-scroll hover:shadow-lg bg-gray-50 ">
        <img
          className="rounded-md drop-shadow-sm"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2 className=" text-md font-semibold py-1">{name}</h2>
        <h2>₹ {price / 100}</h2>
      </div>
    </>
  );
}
