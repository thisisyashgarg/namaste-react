import { useState, useEffect } from "react";

export function useAllRestaurants(): any {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    //api call
    getRestaurants();
  }, []);
  //[] is dependency array,
  // if we dont pass anything in dependency, it renders every time comp is rendered
  //[] empt array, called once => after render cause its a callback
  //[] non empty array => once after render + when depnedency changes

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log("api call made");
      console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch {
      console.error(Error);
    }
  }

  return allRestaurants;
}

export function useFilterRestaurants(): any {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    //api call
    getRestaurants();
  }, []);
  //[] is dependency array,
  // if we dont pass anything in dependency, it renders every time comp is rendered
  //[] empt array, called once => after render cause its a callback
  //[] non empty array => once after render + when depnedency changes

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log("api call made");
      console.log(json);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch {
      console.error(Error);
    }
  }

  return filteredRestaurants;
}
