import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

import { ALL_RESTAURANTS_LIST } from "../mocks/mockData";

function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setFilteredRestaurants(ALL_RESTAURANTS_LIST);
    //api call
    // getRestaurants(setAllRestaurants, setFilteredRestaurants);
  }, []);

  useEffect(() => {
    const data = filterData(searchText, ALL_RESTAURANTS_LIST);
    // update the state - restaurants
    setFilteredRestaurants(data);
  }, [searchText]);

  //early return
  if (!ALL_RESTAURANTS_LIST) return null;

  return ALL_RESTAURANTS_LIST?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col">
      <div className="p-4 text-center mt-24">
        <input
          data-testid="search-input"
          type="text"
          className="mx-3 p-2 px-2 w-96  border border-gray-300 rounded-md focus:outline-none "
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e.target.value is whatever i write
            setSearchText(e.target.value);
          }}
        />

        <button
          data-testid="search-btn"
          className=" p-2 px-4 bg-gray-700 text-white rounded-md hover:shadow-md max-sm:hidden"
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

      {/* <input
        className="border"
        onChange={(e) =>
          setUser({
            name: e.target.value,
            email: "dummy@gmail.com",
          })
        }
      /> */}

      <div
        className=" sm:flex flex-wrap m-0 p-0 justify-center   "
        data-testid="res-list"
      >
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/${restaurant.data.id}`}
              key={restaurant.data.id}
              className="res-cards "
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
