/** @format */

import React from "react";
import "./navbar.styles.scss";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-contents">
        <div className="brand-name">
          <h2>
            Pyura <span>air</span>{" "}
          </h2>
        </div>
        <div className="nav-items">
          <button>
            <BiCart className="nav-items-icon" /> Order status
          </button>
          <button>
            <BiCart className="nav-items-icon" /> Go to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
