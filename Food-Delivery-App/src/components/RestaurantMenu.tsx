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

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="flex p-6">
      <div className="border p-6">
        <img
          className="w-92 rounded-md"
          src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId}
        />
        <h1 className="text-4xl font-semibold ">{restaurantMenu?.name} </h1>
        <h3 className="text-2xl">
          {restaurantMenu?.area}, {restaurantMenu?.city}
        </h3>
        <h3 className="text-2xl">{restaurantMenu?.avgRatingString} stars</h3>
        <h3 className="text-2xl">{restaurantMenu?.costForTwoMsg}</h3>
      </div>

      <div className="border p-6 space-y-2">
        <h1 className="text-3xl font-semibold">Menu</h1>
        <ul>
          {Object.values(restaurantMenu?.menu?.items).map(
            (item: { name: string; id: string }) => (
              <div className="border flex m-2 p-3 " key={item.id}>
                <li className="text-xl">
                  {item.name}
                  <button
                    className="bg-green-600 p-2 m-2 rounded-md text-white items-end "
                    onClick={() => addFoodItem(item)}
                  >
                    Add Item
                  </button>
                </li>
              </div>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
