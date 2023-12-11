import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div
      className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300"
      data-testid="RestaurantCard"
    >
      <img
        className="rounded-lg"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <p>Will deliver in {sla?.deliveryTime}</p>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute ml-4 p-2 bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
