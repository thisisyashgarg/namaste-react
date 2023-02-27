import { FETCH_ALL_RESTAURANTS, FETCH_MENU_URL } from "../constants";

export const idIndexPair = {
  425: 0,
  229: 1,
  121603: 2,
  492159: 3,
  428: 4,
  592285: 5,
  337335: 6,
  108158: 7,
  92389: 8,
  223: 9,
  5934: 10,
  410683: 11,
  118278: 12,
  656392: 13,
  419413: 14,
};
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
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    const mockData = await json?.data?.cards[2]?.data?.data?.cards;
    console.log(mockData);
    return mockData;
  } catch (err) {
    console.log(err);
  }
}

export function getMenuFromResID(
  resId,
  ARRAY_OF_MENU_OF_RESTAURANTS,
  idIndexPair
) {
  if (idIndexPair.hasOwnProperty(resId)) {
    return ARRAY_OF_MENU_OF_RESTAURANTS[idIndexPair[resId]].data;
  } else {
    return null;
  }
}
