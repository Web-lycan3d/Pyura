/** @format */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./config/connection");

connection();
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/Users"));
app.use("/payment", require("./routes/Payment"));
app.use("/verify", require("./routes/Verify"));

app.listen(port, () => {
  console.log("server is running in port " + port);
});
