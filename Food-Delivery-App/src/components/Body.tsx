import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// import fetch from "node-fetch";

// What is state
// what is React Hooks? - functions,
// What is useState

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // searchText is the local state variable, setSearchText is a function,
  // hooks are js functions, usestate is a hook
  // usestate returns an array [local state variable, function to update the variable]
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("render");

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
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch {
      console.error(Error);
    }
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e.target.value is whatever i write
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/${restaurant.data.id}`}
              key={restaurant.data.id}
              className="res-cards"
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
