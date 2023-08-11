import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resinfo = useRestaurantMenu(resID);

  const [showindex, setShowindex] = useState();

  if (resinfo) {
    const { name, cuisines, costForTwoMessage } =
      resinfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
      resinfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card;
    const itemcard =
      resinfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    console.log(itemcard);

    return (
      <>
        <div className="text-center mx-2 p-2 ">
          <div className="font-bold">
            <h1 className=""> {name} </h1>
            <p>
              {cuisines.join(", ")} - {costForTwoMessage}
            </p>
          </div>

          <div>
            {" "}
            {itemcard.map((item, index) => (
              <RestaurantCategory
                Data={item?.card?.card}
                showitem={index === showindex ? true : false}
                setShowindex={() => setShowindex(index)}
              />
            ))}
          </div>
        </div>

        {/* {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            {item.card.info.name}-{" Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))} */}
      </>
    );
  }
};

export default RestaurantMenu;
