/** @format */

const express = require("express");

const router = express.Router();
const crypto = require("crypto");

const Razorpay = require("razorpay");
const { nanoid } = require("nanoid");
const instance = new Razorpay({
  key_id: "rzp_test_6zVUH0RpvBsqx6",
  key_secret: "tjqyJQYzXaCNdCTUUGnFArBt",
});

router.get("/order", (req, res) => {
  const price = parseInt(req.query.price) * 100;

  const recpitId = nanoid();

  let options = {
    amount: `${price}`, // amount in the smallest currency unit
    currency: "INR",
    receipt: recpitId,
  };
  instance.orders.create(options, (err, order) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.status(200).json(order);
    }
  });
});

router.post("/capture", async (req, res) => {
  const { data, response } = req.body;
  //   console.log(req.params.id);
  const text = data.id + "|" + response.razorpay_payment_id;

  try {
    const hash = crypto.createHmac("sha256", "tjqyJQYzXaCNdCTUUGnFArBt");
    hash.update(text);
    const digest = hash.digest("hex");
    if (digest === response.razorpay_signature) {
      res.status(200).json({ orderStatus: true });
    } else {
      res.json({ orderStatus: false });
    }
  } catch (error) {}
});
module.exports = router;
