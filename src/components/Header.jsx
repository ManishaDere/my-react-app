import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  console.log("cartItems ==>", cartItems);
  // useEffect(() => {
  //   // useffect no dependency array ==> calls on every render
  //   // useffect have empty dependency array/ [] ==> calls after first render only once(just once)
  //   // useffect dependency array ==> calls on when dependency changes after componnet gets rendered
  // }, [btnName]);

  const onThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-24">
        <img src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center">
          <li className="px-4">
            <label htmlFor="theme" className="pr-2">
              Use Dark Theme
            </label>
            <input
              type="checkbox"
              className=""
              id="theme"
              onClick={() => onThemeChange()}
            />
          </li>
          <li className="px-4">
            <p>Online Status:</p>
            {onlineStatus ? "online" : "offline"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart {cartItems.length}-items</Link>
          </li>
          <li className="px-4">
            <button
              className="border border-solid border-black rounded-lg p-4"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold">{loggedInUser}</li>
          <li className="px-4">
            <Link to="/demo">Demo</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
