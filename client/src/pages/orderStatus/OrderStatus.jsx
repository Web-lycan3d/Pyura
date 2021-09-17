/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./orderstatus.styles.scss";

const OrderStatus = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phoneNo);
  };
  return (
    <div className="order-s-container">
      <div className="order-s-contents">
        <div className="order-s-box">
          <h2>Order Status</h2>
          <p>
            Please fill in the first box below with your{" "}
            <span>phone number</span> to receive a{" "}
            <span>One-time Password (OTP).</span> After receiving an OTP through
            a text message, enter the same OTP into the second box. Once you
            have successfully entered your OTP, you will then be able to{" "}
            <span>view the status</span> of your order.
          </p>
          <div className="order-s-form">
            <form onSubmit={handleSubmit}>
              <div className="order-s-input-1">
                <input
                  type="text"
                  name="phoneNumber"
                  className="userinput"
                  onChange={(e) => setPhoneNo(e.target.value)}
                  placeholder="Enter your Phone number"
                />
                <button className="usersubmit-btn">Get OTP</button>
              </div>

              <div className="order-s-input-2">
                <input
                  type="text"
                  name="phoneNumber"
                  className="userinput input-2"
                  placeholder="Enter OTP"
                  onChange={(e) => setUserOtp(e.target.value)}
                />
                <button className="usersubmit-btn ">Submit</button>
              </div>
            </form>
          </div>
          <div className="order-s-bottom">
            <p>Facing issues with the status of your order?</p>
            <span>
              Head on over to the{" "}
              <Link to="/contact" className="underline">
                {" "}
                Contact Us
              </Link>{" "}
              page and give us a ring or write to us, we'll get back shortly and
              help you out.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
