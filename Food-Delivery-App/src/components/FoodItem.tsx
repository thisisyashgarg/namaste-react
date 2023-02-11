import React from "react";
import { IMG_CDN_URL } from "../constants";

export default function FoodItem({ name, cloudinaryImageId, price }) {
  return (
    <div className="w-60 p-4 m-3 h-64 rounded-md overflow-scroll hover:shadow-lg  ">
      <img
        className="rounded-md shadow-md"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="text-2xl font-semibold py-1">{name}</h2>
      <h2 className="text-xl font-semibold py-1">₹ {price / 100}</h2>
    </div>
  );
}
