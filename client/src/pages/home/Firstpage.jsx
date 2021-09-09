/** @format */
import React from "react";
import "./firstpage.styles.scss";
import { AiOutlineDown } from "react-icons/ai";

const Firstpage = () => {
  return (
    <div className="firstpage-container">
      <div className="bg-img">
        <img src="../images/firstpage/img1.svg" alt="error" />
      </div>
      <div className="firstpage-contents">
        <div className="firstpage-text">
          <h1>
            Pyura <span>air</span>
          </h1>
          <p>Breathe In Purity</p>
          <span>
            An innovation for and beyond COVID... Pyura Air is a wearable,
            self-sanitizing & air purifying mask. With our distinctive air
            filtration system, protect your loved ones from suffocation,
            allergens, microbes and smelly masks! It is the everyday solution to
            eliminate your fears and enjoy stress-free breathing.
          </span>
        </div>
        <div className="firstpage-img">
          <img src="https://i.ibb.co/WKbtMcw/Pyura-renders-2.webp" alt="err" />
        </div>

        <div className="center-text">
          <p>Learn More!</p>
          <AiOutlineDown className="center-down-icon" />
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
