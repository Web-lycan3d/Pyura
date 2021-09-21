/** @format */

import React from "react";
import "./orderdetails.styles.scss";

const OrderDetails = () => {
  return (
    <div className="orderdetails-box">
      <div className="orderdetails-header">
        <h1>User Name</h1>
        <h4>OrderStaus : in transit</h4>
      </div>
      <div className="orderdetails-contents">
        <div className="orderdetails-left">
          <div className="orderdetails-left-contents">
            <p>OrderId</p>
            <span>1223</span>
          </div>
          <div className="orderdetails-left-contents">
            <p>Phone no.</p>
            <span>1223</span>
          </div>
          <div className="orderdetails-left-contents">
            <p>Email id</p>
            <span>1223</span>
          </div>{" "}
          <div className="orderdetails-left-address">
            <p>Shipping Address</p>
            <span className="address-box">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              tenetur impedit, praesentium aliquid amet sint quod assumenda
              suscipit quae a. Reiciendis dolor rem repudiandae voluptas eveniet
              perferendis quae culpa esse.
            </span>
          </div>
        </div>
        <div className="orderdetails-right">
          <div className="orderdetails-right-header">
            <span>Pyura air</span>
            <span>
              {" "}
              <sub>Rs 6999/unit</sub>1{" "}
            </span>
          </div>
          <div className="orderdetails-price">
            <div className="price-contents">
              <p>Sub Total</p>
              <span>Rs 5000</span>{" "}
            </div>
            <div className="price-contents">
              {" "}
              <p>Shipping</p>
              <span>Rs 5000</span>{" "}
            </div>
            <div className="price-contents">
              {" "}
              <p>Discount</p>
              <span>Rs 5000</span>{" "}
            </div>
          </div>
          <div className="orderdetails-total">
            <h3>
              Total <sub>including gst</sub>{" "}
            </h3>
            <p>Rs 6000</p>
          </div>
        </div>
      </div>
      <div className="other-orders">
        <h3>No more orders to show</h3>
      </div>
    </div>
  );
};

export default OrderDetails;
