import React from "react";
import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 p-4 m-3 h-72  border border-gray-100 bg-gray rounded-md overflow-scroll hover:shadow-lg   ">
      <img className="rounded-md" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="text-xl font-semibold py-1">{name}</h2>
      <h3 className="cuisines">🍲 {cuisines.join(", ")}</h3>
      <h4 className="distance">📍 {lastMileTravelString} away</h4>
    </div>
  );
};

export default RestrauntCard;
