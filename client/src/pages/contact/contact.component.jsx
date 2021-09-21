/** @format */

import React, { Fragment } from "react";
import { IoMail, IoCall, IoLocation } from "react-icons/io5";

import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-banner">
        <img src="https://i.ibb.co/kqkwX9M/Group-5423.png" alt="Contact" />
        <div className="contact-title">
          <h1>Contact us</h1>
          <h4>Lorem Ipsum Dolor Sit Amet, Consecteur Adipiscing Elit</h4>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-details">
          <div className="detail">
            <IoMail className="contact_icon" />
            <span>support@pyuraair.com</span>
          </div>
          <div className="detail">
            <IoCall className="contact_icon" />
            <span>+91 9591807979</span>
          </div>
          <div className="detail">
            <IoLocation className="contact_icon" />
            <span>IKP Eden, Kormangala, Bengaluru - 29</span>
          </div>
        </div>
        <div className="map">
          <img
            src="https://i.ibb.co/Ny6bbjx/Mask-Group-33.png"
            alt="Pyura location"
          />
        </div>
        <div className="contact-content">
          <p>
            Please feel free to reach out to us with any concerns or suggestions
            you might have about our product. As our valued customers, we would
            deeply appreciate your feedback so that we can constantly strive to
            improve while offering you the highest quality services and an
            overall fulfilling experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
