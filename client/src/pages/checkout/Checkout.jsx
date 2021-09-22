/** @format */

import React, { useEffect, useState } from "react";
import "./checkout.styles.scss";
import validator from "validator";
import query from "query-string";
import { useLocation } from "react-router";

const Checkout = () => {
  const location = useLocation();
  const [userData, setUserData] = useState({
    email: "",
    phonenumber: "",
    address: "",
    firstname: "",
    lastname: "",
    city: "",
    pincode: "",
    state: "",
  });
  const [phoneError, setPhoneError] = useState(false);

  const [userOtpin, setUserOtpin] = useState("");
  const [otpsentStatus, setOtpSentStatus] = useState(false);
  const [btnloaderState, setbtnLoader] = useState(false);
  const [itemquanity, setitemquanity] = useState(null);

  useEffect(() => {
    const { q } = query.parse(location.search);
    setitemquanity(parseInt(q));
  }, [location.search]);

  const shippingTotal = 50;
  const itemprice = 6999;
  const subtotal = itemprice * itemquanity;
  const totalPrice = subtotal + shippingTotal;

  const handleCheckoutOTP = (e) => {
    e.preventDefault();

    const validate = validator.isMobilePhone(userData.phonenumber, ["en-IN"]);

    setbtnLoader(true);
    setTimeout(() => {
      validatePhone();
      setbtnLoader(false);
    }, 1500);

    function validatePhone() {
      if (validate) {
        setPhoneError(false);
        setOtpSentStatus(true);
      } else {
        setOtpSentStatus(false);
        setPhoneError(true);
      }
    }
  };

  const verifyOtp = () => {
    console.log(userOtpin);
  };

  const handleResendOTP = () => {
    console.log(userData.phonenumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="checkout-container">
      <div className="checkout-contents">
        <div className="checkout-img">
          <img
            src="https://i.ibb.co/QHpzGP0/Mask-Group-32.png"
            alt="pyuracheckoutimg"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="checkout-details">
            <div className="checkout-details-left">
              <h1>Checkout</h1>
              <p>Contact information</p>
              <div className="checkout-contact-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
                <div className="checkout-mobile-ver">
                  <input
                    type="text"
                    name="phonenumber"
                    required
                    placeholder="Phone number"
                    onChange={(e) =>
                      setUserData({ ...userData, phonenumber: e.target.value })
                    }
                  />
                  {btnloaderState ? (
                    <div className="loader-c">
                      <span className="loader-spin">
                        <div className="loading"></div>
                      </span>
                    </div>
                  ) : (
                    <button onClick={handleCheckoutOTP}>Submit</button>
                  )}
                </div>
                {otpsentStatus && (
                  <>
                    <span className="checkout-errors">
                      OTP sent to {userData.phonenumber}{" "}
                    </span>{" "}
                    <span className="checkout-otp-resend">
                      To resend OTP{" "}
                      <span onClick={handleResendOTP}>Click here</span>
                    </span>
                  </>
                )}
                {phoneError && (
                  <span className="checkout-errors">Not valid</span>
                )}
                <div className="checkout-otp">
                  <input
                    type="text"
                    name="otp"
                    value={userOtpin}
                    onChange={(e) => setUserOtpin(e.target.value)}
                    disabled={!otpsentStatus}
                    placeholder="Enter OTP"
                  />
                  <button disabled={!otpsentStatus} onClick={verifyOtp}>
                    Verify
                  </button>
                </div>

                <div className="checkout-address">
                  <h4>Shipping Address</h4>
                  <div className="address-name">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      disabled={!otpsentStatus}
                    />
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      disabled={!otpsentStatus}
                    />
                  </div>
                  <textarea
                    name="address"
                    cols="30"
                    rows="4"
                    placeholder="Address"
                    disabled={!otpsentStatus}></textarea>
                  <div className="address-city">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      disabled={!otpsentStatus}
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      disabled={!otpsentStatus}
                    />
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Zip/Pin"
                      disabled={!otpsentStatus}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-details-right">
              <div className="chechout-header-right">
                <img
                  src="https://i.ibb.co/WKbtMcw/Pyura-renders-2.webp"
                  alt="err"
                />
                <p>
                  <sub>Rs 6999/unit</sub> {itemquanity}
                </p>
              </div>
              <div className="discount-input">
                <input
                  type="text"
                  name="discount"
                  placeholder="Discount code"
                />
                <button>Apply</button>
              </div>
              <div className="checkout-total">
                <div className="checkout-total-1">
                  <p>Sub Total</p>
                  <span>Rs {subtotal}</span>
                </div>
                <div className="checkout-total-1">
                  <p>Shipping</p>
                  <span>Rs {shippingTotal}</span>
                </div>
              </div>
              <div className="checkout-total-main">
                <h5>
                  Total <sub>Inclusive of GST</sub>{" "}
                </h5>
                <span>Rs {totalPrice}</span>
              </div>
              <div className="checkout-submit-btn">
                <button disabled={!otpsentStatus} type="submit">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
