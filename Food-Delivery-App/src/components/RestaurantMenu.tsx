import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

export default function RestaurantMenu() {
  //reading dynamic url
  const params = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229"
    );
    const json = await data.json();
    console.log(json);
    // setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info);
    // console.log(restaurantMenu);
  }

  const { id } = params;
  return (
    <div>
      <img src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId} />
      <h1>{restaurantMenu.name} </h1>
      <h3>
        {restaurantMenu.areaName}, {restaurantMenu.city}
      </h3>
      <h3>{restaurantMenu.avgRatingString} stars</h3>
      <h3>{restaurantMenu.costForTwoMessage}</h3>
    </div>
  );
}
