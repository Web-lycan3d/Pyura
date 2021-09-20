/** @format */

import React, { useState } from "react";
import "./checkout.styles.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ImageCarausel from "../../components/Caraousel/ImageCarausel";
const Checkout = () => {
  const [Quantity, setQuantity] = useState(1);
  return (
    <div className="checkout-container">
      <div className="checkout-contents">
        <div className="checkout-img">
          <ImageCarausel />
        </div>
        <div className="checkout-details">
          <h2>
            Pyura <span>air</span>
          </h2>
          <span className="item-details">
            Pyura Air’s mask has been designed in a unique and ergonomic manner
            with a clear glass front and smooth texture giving it a sleek and
            attractive appearance.
            <br />
            <br />
            With its powerful air filtration system, it provides maximum
            protection against unwanted elements in the air and due to its
            light-weight, it is the perfect device for repeated and hassle-free
            wearing experiences. Through a combination of advanced technology
            and comfortable design, Pyura Air is the essential product needed in
            this day and age.
          </span>
          <div className="checkout-div">
            <div className="checkout-order-quantity">
              <IoIosArrowUp
                className="arrow-icons"
                onClick={() => setQuantity((preV) => preV + 1)}
              />
              <p>{Quantity > 0 ? Quantity : "-"}</p>
              <IoIosArrowDown
                className="arrow-icons"
                onClick={() => setQuantity((preV) => preV - 1)}
              />
            </div>
            <div className="checkout-btn">
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
