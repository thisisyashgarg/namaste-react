import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, NO_IMAGE_AVAILABLE } from "../constants";
// import useRestaurant from "../utils/useRestaurant";
import { ARRAY_OF_MENU_OF_RESTAURANTS } from "../mocks/mockData";
import { addItem } from "../utils/cartSlice";
import ShimmerMenu from "./ShimmerMenu";
import { idIndexPair } from "../utils/helper";
import { getMenuFromResID } from "../utils/helper";

type Menu = {
  costForTwoMsg: string;
  avgRatingString: string;
  cloudinaryImageId: string;
  menu: {
    items: { key: { cloudinaryImageId: string; name: string; price: number } };
  };
  id: string;
  name: string;
  area: string;
  city: string;
};

export default function RestaurantMenu() {
  const { resId } = useParams();
  // const [restaurantMenu, setRestaurantMenu] = useRestaurant(resId);
  // const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   getDataFromJSONFile();
  // }, []);

  // async function getDataFromJSONFile() {
  //   const data = await fetch("./mocks/mockData.json");
  //   const jsonData = await data.json();
  //   console.log(jsonData);
  // }

  const dispatch = useDispatch();

  function addFoodItem(item: object) {
    dispatch(addItem(item));
  }

  const test: Menu = getMenuFromResID(
    resId,
    ARRAY_OF_MENU_OF_RESTAURANTS,
    idIndexPair
  );
  // function filterMenuData(searchText, restaurantMenu) {
  //   console.log("called");
  //   const filterData = Object.values(restaurantMenu?.menu?.items).filter(
  //     (dish) => dish?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  //   );
  //   return filterData;
  // }
  // const result =[];

  //  for(var i in test?.menu?.items)
  //   result.push({id: i, name: restaurantMenu?.menu?.items[i].name, price: restaurantMenu?.menu?.items[i].price});
  //   console.log(result);

  return !test ? (
    <ShimmerMenu />
  ) : (
    <>
      <div className=" flex  p-16 space-x-6 justify-center mt-24 bg-gray-900 text-gray-100">
        <img
          className="w-96 rounded-md"
          src={IMG_CDN_URL + test?.cloudinaryImageId}
        />
        <div className="justify-center space-y-1">
          <h1 className="text-4xl font-semibold ">{test?.name} </h1>
          <h3 className="text-2xl">
            📍 {test?.area}, {test?.city}
          </h3>
          <h3 className="text-2xl">🌟 {test?.avgRatingString} stars</h3>
          <h3 className="text-2xl">🍲 {test?.costForTwoMsg}</h3>
        </div>
      </div>

      <div className=" flex flex-col space-y-2 justify-center items-center">
        <div>
          {Object.values(test?.menu?.items).map((item) => (
            <div
              key={item.name}
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
          ))}
        </div>
      </div>
    </>
  );
}
