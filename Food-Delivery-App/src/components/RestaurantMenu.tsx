import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

export default function RestaurantMenu() {
  console.log("render");
  //reading dynamic url
  const { resId } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=${resId}`
    );
    const json = await data.json();
    setRestaurantMenu(json.data);
    console.log(restaurantMenu);
    // console.log(Object.values(restaurantMenu.menu?.items));
  }

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="res-details">
        <img
          className="menu-img"
          src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId}
        />
        <h1>{restaurantMenu?.name} </h1>
        <h3>
          {restaurantMenu?.area}, {restaurantMenu?.city}
        </h3>
        <h3>{restaurantMenu?.avgRatingString} stars</h3>
        <h3>{restaurantMenu?.costForTwoMsg}</h3>
      </div>

      <div className="dishes">
        <h1>Menu</h1>
        {/* {console.log(Object.values(restaurantMenu?.menu?.items)[0].name)} */}

        <ul>
          {Object.values(restaurantMenu?.menu?.items).map((item: Object) => (
            <li key={item.id}> {item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
