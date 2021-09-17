/** @format */

import React from "react";
import "./navbar.styles.scss";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-contents">
        <div className="brand-name">
          <Link to="/" className="header-link">
            <h2>
              Pyura <span>air</span>{" "}
            </h2>
          </Link>
        </div>
        <div className="nav-items">
          <Link to="/user/order" className="link-tag-navbar">
            <button>
              <BiCart className="nav-items-icon" /> Order status
            </button>
          </Link>
          <Link to="/user/order" className="link-tag-navbar">
            <button>
              <BiCart className="nav-items-icon" /> Go to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
