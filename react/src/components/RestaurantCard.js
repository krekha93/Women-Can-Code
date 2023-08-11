import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo } = resData.data;

  return (
    <div className="m-4 p-4 w-[220px] bg-gray-100 rounded-lg hover:bg-gray-700">
      <img
        className="rounded-lg"
        alt=" image"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />

      <h5 className="font-bold py-4 text-lg"> {name}</h5>
      <h5>{avgRating}</h5>

      <h5> {cuisines.join(",")}</h5>
      <h5>₹{costForTwo / 100}</h5>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-1 px-1 rounded-lg">
          {" "}
          Promoted{" "}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
