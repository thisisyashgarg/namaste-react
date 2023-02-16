import React, { useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { getRestaurants } from "../utils/helper";

function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const online = useOnline();

  // const { user, setUser } = useContext(UserContext);

  console.log("render");

  useEffect(() => {
    //api call
    getRestaurants(setAllRestaurants, setFilteredRestaurants);
  }, []);
  //[] is dependency array,
  // if we dont pass anything in dependency, it renders every time comp is rendered
  //[] empt array, called once => after render cause its a callback
  //[] non empty array => once after render + when depnedency changes

  if (!online) {
    return (
      <h1>Oops, you are offline, please check your internet connection</h1>
    );
  }

  //early return
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-4 text-center mt-24">
        <input
          data-testid="search-input"
          type="text"
          className="mx-3 p-2 px-2 w-96 border border-gray-200 rounded-md hover:border  "
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e.target.value is whatever i write
            setSearchText(e.target.value);
          }}
        />

        <button
          data-testid="search-btn"
          className=" p-2 px-4 bg-gray-700 text-white rounded-md hover:shadow-md"
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

      <div className="flex flex-wrap m-0 p-0 " data-testid="res-list">
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
}

export default Body;
