import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, NO_IMAGE_AVAILABLE } from "../constants";
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
      <div className=" flex  p-16 space-x-6 justify-center mt-24 bg-gray-900 text-gray-100">
        <img
          className="w-96 rounded-md"
          src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId}
        />
        <div className="justify-center space-y-1">
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

      <div className=" flex flex-col border p-6 space-y-2 justify-center items-center">
        <div>
          {Object.values(restaurantMenu?.menu?.items).map(
            (item: {
              name: string;
              id: string;
              cloudinaryImageId: string;
              price: number;
            }) => (
              <div
                data-testid="menu"
                className="flex  p-4 m-4 space-x-5 max-w-xl  rounded-lg justify-between "
              >
                <div className="flex space-x-3">
                  <img
                    src={
                      !item.cloudinaryImageId
                        ? NO_IMAGE_AVAILABLE
                        : IMG_CDN_URL + item.cloudinaryImageId
                    }
                    className="w-48 rounded-md "
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-xl">{item.name}</h1>
                    <p className="font-normal">₹ {item.price / 100}</p>
                  </div>
                </div>

                <button
                  onClick={() => addFoodItem(item)}
                  className="bg-green-700 h-10 p-2 px-3 text-white rounded-md mr-0 hover:bg-green-600 "
                >
                  Add
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
