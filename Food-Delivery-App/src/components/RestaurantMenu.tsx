import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem, removeItem } from "../utils/cartSlice";
import { store } from "../utils/store";

export default function RestaurantMenu() {
  const { resId } = useParams();
  const restaurantMenu = useRestaurant(resId);
  const dispatch = useDispatch();

  function addFoodItem(item: object) {
    dispatch(addItem(item));
  }

  console.log(restaurantMenu);

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className=" flex  p-6 space-x-6 justify-center mt-24">
        <img
          className="w-96 rounded-md"
          src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId}
        />
        <div className="justify-center">
          <h1 className="text-4xl font-semibold ">{restaurantMenu?.name} </h1>
          <h3 className="text-2xl">
            📍 {restaurantMenu?.area}, {restaurantMenu?.city}
          </h3>
          <h3 className="text-2xl">
            🌟 {restaurantMenu?.avgRatingString} stars
          </h3>
          <h3 className="text-2xl">🍲 {restaurantMenu?.costForTwoMsg}</h3>
        </div>
      </div>

      <div className=" flex flex-col border p-6 space-y-2 justify-center">
        <h1 className="text-3xl font-semibold">Menu</h1>
        <ul data-testid="menu" className="items-center">
          {Object.values(restaurantMenu?.menu?.items).map(
            (item: {
              name: string;
              id: string;
              cloudinaryImageId: string;
              price: number;
            }) => (
              <li className="border flex m-2 p-3 w-96 " key={item.id}>
                <img
                  className="w-28"
                  alt={item.name}
                  src={IMG_CDN_URL + item?.cloudinaryImageId}
                />
                <div className="flex flex-col">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>₹ {item?.price / 100}</p>
                </div>

                <button
                  data-testid="add-btn"
                  className="bg-green-600 p-2 m-2 rounded-md text-white "
                  onClick={() => addFoodItem(item)}
                >
                  Add Item
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
