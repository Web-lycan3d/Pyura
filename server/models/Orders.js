/** @format */

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderId: String,
    userId: String,
    firstname: String,
    lastname: String,
    email: String,
    date: String,
    phonenumber: String,
    discount: {
      type: String,
      default: "code",
    },
    orders: [
      {
        orderId: String,
        firstname: String,
        lastname: String,
        email: String,
        orderStatus: {
          type: String,
          default: "Order Processing",
        },
        date: String,
        phonenumber: String,
        address: String,
        state: String,
        city: String,
        discountAppliedState: {
          type: Boolean,
          default: false,
        },
        orderTotal: Number,
        quantity: String,
        discountPrice: Number,
        discountCode: String,
        shippingTotal: Number,
        subTotal: Number,
      },
    ],
  },
  { timestamps: (currentTime) => new Date() }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
