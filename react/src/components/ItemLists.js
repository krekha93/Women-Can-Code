import React from "react";
import { CDN_URL } from "../utils/constant";

const ItemLists = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
          key={item?.card?.info?.id}>
          <div className="py-2">
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-10" />
            <span> {item?.card?.info?.name}</span>
            <span>
              {" "}
              - ₹
              {item?.card?.info?.price
                ? item.card.info.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs"> {item?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;

{
  /* <ul>
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        </ul> */
}
