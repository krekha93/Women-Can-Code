import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import resobj from "../utils/mockdata";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import userContext from "../utils/context";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [Searchvalue, setSearchValue] = useState();
  const [newList, setnewList] = useState();

  const { LoggedinUser, setUsername } = useContext(userContext);
  console.log(LoggedinUser);
  console.log(setUsername);

  const WithPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:8089/swiggy/data");
    const result = await data.json();

    //optional chaining
    setrestaurantList(result?.data?.cards[2]?.data?.data?.cards);
  };

  const toprated = () => {
    const filterlist = resobj.filter((res) => res.data.avgRating > 4);

    setrestaurantList(filterlist);
  };

  const Change = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
    if (!searchValue) {
      setnewList(null);
    }
  };

  const Click = () => {
    const searchlist = resobj.filter((res) =>
      res.data.name.toLowerCase().includes(Searchvalue.toLowerCase())
    );
    console.log(searchlist);
    setnewList(searchlist);
  };

  const onlinestatus = useOnlinestatus();

  if (onlinestatus === false)
    return <h1> You are Offline, Please check your internet connection.</h1>;

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            placeholder="Search"
            type="text"
            onChange={Change}
            value={Searchvalue}
          />
          <button className="px-2 bg-green-100 m-2 rounded-lg" onClick={Click}>
            Search
          </button>
          <button
            className="px-2 bg-green-100 m-2 rounded-lg"
            onClick={toprated}>
            Top Rated Restaurants
          </button>
          <input
            className="border border-solid border-black"
            onChange={(e) => setUsername(e.target.value)}
            value={LoggedinUser}
          />
          <p> {LoggedinUser}</p>
        </div>
      </div>

      <div className="flex flex-wrap">
        {newList
          ? newList.map((res) => (
              <RestaurantCard key={res.data.id} resData={res} />
            ))
          : restaurantList.map((res) => (
              <Link key={res.data.id} to={"/restaurant/" + res.data.id}>
                {res.data.promoted ? (
                  <WithPromoted key={res.data.id} resData={res} />
                ) : (
                  <RestaurantCard key={res.data.id} resData={res} />
                )}
              </Link>
            ))}
        {/* {restaurantList.map((res) => (
          <RestaurantCard key={res.data.id} resData={res} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;
