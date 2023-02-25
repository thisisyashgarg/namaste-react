import { FETCH_ALL_RESTAURANTS, FETCH_MENU_URL } from "../constants";

export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

export async function getRestaurants(
  setAllRestaurants,
  setFilteredRestaurants
) {
  try {
    // const data = await fetch("http://localhost:4001/");
    const data = await fetch(FETCH_ALL_RESTAURANTS);
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  } catch (err) {
    console.log(err);
  }
}
