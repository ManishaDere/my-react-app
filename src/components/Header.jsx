import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <header>
    <div className="app-logo">
      <img src={LOGO_URL} />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </header>
);

export default Header;
