/** @format */

import React from "react";
import "./orderdetails.styles.scss";
import OrdersList from "./OrdersList";

const OrderDetails = ({ userData }) => {
  return (
    <>
      {userData.orders.map((item) => (
        <OrdersList userData={item} />
      ))}
    </>
  );
};

export default OrderDetails;
