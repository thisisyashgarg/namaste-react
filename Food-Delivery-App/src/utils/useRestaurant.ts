import { useState, useEffect } from "react";

export default function useRestaurant(resId: string): any {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=${resId}`
    );
    const json = await data.json();
    setRestaurantMenu(await json.data);
    console.log(restaurantMenu);
  }
  return restaurantMenu;
}
