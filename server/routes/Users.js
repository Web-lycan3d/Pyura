/** @format */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is runing");
});
router.post("/user/order", (req, res) => {
  console.log(req.body);
});
module.exports = router;
