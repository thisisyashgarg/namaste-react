import React from "react";
import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 p-4 m-3 shadow-lg rounded-md">
      <img className="rounded-md" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <h3 className="cuisines">{cuisines.join(", ")}</h3>
      <h4 className="distance">📍 {lastMileTravelString} away</h4>
    </div>
  );
};

export default RestrauntCard;
