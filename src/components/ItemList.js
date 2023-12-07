import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items ==> ", items);
  const dispatch = useDispatch();
  const handleItemClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="flex">
          <div className="w-9/12 p-2 m-2 border-gray-200 border-b-2 text-left">
            <span className="font-bold">{item?.card?.info?.name}</span>
            <span className="text-sm">
              --Rs.
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <div className="">{item?.card?.info?.description}</div>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button
                className="bg-black text-white shadow-lg m-auto p-2 rounded-lg"
                onClick={() => handleItemClick(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt="image"
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
