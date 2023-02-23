import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

export type RestaurantMenuType = {
  cloudinaryImageId: string;
  name: string;
  city: string;
  area: string;
  avgRatingString: string;
  costForTwoMsg: string;
  menu: {
    items: {
      key: {
        name: string;
        id: string;
        cloudinaryImageId: string;
        price: number;
      };
    };
  };
};

export default function useRestaurant(
  resId: string
): [RestaurantMenuType, Function] {
  const [restaurantMenu, setRestaurantMenu] =
    useState<RestaurantMenuType>(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`${FETCH_MENU_URL}${resId}`);
    const json = await data.json();
    setRestaurantMenu(await json.data);
  }
  return [restaurantMenu, setRestaurantMenu];
}
