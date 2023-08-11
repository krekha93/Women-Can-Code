import React, { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = ({ Data, showitem, setShowindex }) => {
  const handleclick = () => {
    setShowindex();
  };
  return (
    <div
      className="mx-auto shadow-lg w-6/12 my-4  bg-gray-50 cursor-pointer "
      onClick={handleclick}>
      <div className="flex justify-between">
        <span>
          {" "}
          {Data.title} ({Data.itemCards.length}){" "}
        </span>
        <span> ⬇️</span>
      </div>
      {showitem && <ItemLists items={Data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
