import React, { useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { FETCH_ALL_RESTAURANTS } from "../constants";
import { UserContext } from "../utils/UserContext";

function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const online = useOnline();

  const { user, setUser } = useContext(UserContext);

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
      const data = await fetch(FETCH_ALL_RESTAURANTS);
      const json = await data.json();
      console.log("api call made");
      console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch {
      console.error(Error);
    }
  }

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
      <div className=" p-4">
        <input
          type="text"
          className="mx-3 p-1 px-2 border  rounded-sm hover:border "
          placeholder="Type here..."
          value={searchText}
          onChange={(e) => {
            //e.target.value is whatever i write
            setSearchText(e.target.value);
          }}
        />

        <button
          className=" p-1 px-2 bg-gray-700 text-white rounded-md"
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

      <input
        className="border"
        onChange={(e) =>
          setUser({
            name: e.target.value,
            email: "dummy@gmail.com",
          })
        }
      />

      <div className="flex flex-wrap m-0 p-0 ">
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
