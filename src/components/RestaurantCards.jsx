import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const RestaurantCards = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log("listOfRestaurants ==>", listOfRestaurants);
  const [searchText, setSearchText] = useState("");
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleShowMoreRestaurants = () => {
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    postData(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update",
      {
        lat: 12.9351929,
        lng: 77.62448069999999,
        nextOffset: "COVCELQ4KICIxemZ776bTDCnEzgD",
        widgetOffset: {
          NewListingView_Topical_Fullbleed: "",
          NewListingView_category_bar_chicletranking_TwoRows: "",
          NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
          Restaurant_Group_WebView_PB_Theme: "",
          Restaurant_Group_WebView_SEO_PB_Theme: "",
          collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
          inlineFacetFilter: "",
          restaurantCountWidget: "",
        },
        filters: {},
        seoParams: {
          seoUrl: "https://www.swiggy.com/",
          pageType: "FOOD_HOMEPAGE",
          apiName: "FoodHomePage",
        },
        page_type: "DESKTOP_WEB_LISTING",
        _csrf: "BqyCqLzaDGNB-urLdxzyoBaHxJIBYJUaRjyF2WrE",
      }
    ).then((data) => {
      // console.log(data); // JSON data parsed by `data.json()` call
      setFilteredRestaurant(
        listOfRestaurants.concat(
          data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        )
      );
    });
  };

  console.log("filteredRestaurant ===>", filteredRestaurant);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-card-block">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg mr-4"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-2 bg-pink-100 rounded-lg"
            onClick={handleShowMoreRestaurants}
          >
            Show More Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant?.info?.id}
          >
            {restaurant.info.avgRating > 4 ? (
              <PromotedRestaurantCard resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCards;
