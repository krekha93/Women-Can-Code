import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resID) => {
  const [resinfo, setResinfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(MENU_API + resID);

    const json = await menu.json();
    setResinfo(json.data);
  };

  return resinfo;
};

export default useRestaurantMenu;
