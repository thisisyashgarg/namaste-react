import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

export default function useRestaurant(resId: string): any {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`${FETCH_MENU_URL}${resId}`);
    const json = await data.json();
    setRestaurantMenu(await json.data);
    console.log(restaurantMenu);
  }
  return restaurantMenu;
}
