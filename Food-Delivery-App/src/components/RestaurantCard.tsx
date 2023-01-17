import React from "react";

import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3 className="cuisines">{cuisines.join(", ")}</h3>
      <h4 className="distance">{lastMileTravelString} away</h4>
    </div>
  );
};

export default RestrauntCard;
