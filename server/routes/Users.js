/** @format */

const express = require("express");
const { nanoid } = require("nanoid");
const Order = require("../models/Orders");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is runing");
});
router.get("/user/details", async (req, res) => {
  const userData = await Order.find();
  if (userData) {
    res.json(userData);
  } else {
    res.json({ message: "no orders found" });
  }
});
router.put("/user/update/status", async (req, res) => {
  const { orderid, phone, status } = req.body;
  try {
    const updateOrder = await Order.updateOne(
      {
        phonenumber: phone,
        "orders.orderId": orderid,
      },
      {
        $set: {
          "orders.$.orderStatus": status,
        },
      }
    );
    res.json({ message: "updated" });
  } catch (error) {
    res.statusCode(404).json({ message: "server error" });
  }
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
    orderId,
    discountAplliedState,
  } = req.body;
  // const orderid = nanoid();
  const userid = nanoid();

  const data = req.body;

  data.orderId = orderId;
  data.date = new Date().toLocaleDateString();
  data.orderTotal = totalPrice;
  data.quantity = quantity;
  data.discountPrice = discountPrice;
  data.discountCode = discountCode;
  data.shippingTotal = shippingTotal;
  data.subTotal = subtotal;
  data.discountAppliedState = discountAplliedState;

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
    return res.status(404);
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
