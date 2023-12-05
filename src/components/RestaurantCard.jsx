import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-50 rounded-lg hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <p>Will deliver in {sla.deliveryTime}</p>
    </div>
  );
};

export default RestaurantCard;
