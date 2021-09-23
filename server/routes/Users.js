/** @format */

const express = require("express");
const { nanoid } = require("nanoid");
const Order = require("../models/Orders");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is runing");
});
router.post("/user/order", async (req, res) => {
  const {
    phonenumber,
    totalPrice,
    quantity,
    discountPrice,
    discountCode,
    shippingTotal,
    subtotal,
  } = req.body;
  const orderid = nanoid();
  const userid = nanoid();

  const data = req.body;

  data.orderId = orderid;
  data.date = new Date().toLocaleDateString();
  data.orderTotal = totalPrice;
  data.quantity = quantity;
  data.discountPrice = discountPrice;
  data.discountCode = discountCode;
  data.shippingTotal = shippingTotal;
  data.subTotal = subtotal;
  console.log(data);
  try {
    const userExits = await Order.findOne({ phonenumber: phonenumber });

    if (userExits) {
      const updateOrders = await Order.updateOne(
        { phonenumber: phonenumber },
        {
          $push: { orders: data },
        }
      );
    } else {
      data.userId = userid;
      data.orders = data;
      const order = new Order(data);
      await order.save();
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/user/details/:id", async (req, res) => {
  try {
    const userData = await Order.findOne({ phonenumber: req.params.id });

    if (userData) {
      res.json(userData);
    } else {
      res.json(400);
    }
  } catch (error) {
    return res.status(404);
  }
});
module.exports = router;
