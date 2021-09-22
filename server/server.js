/** @format */

const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");

connection();
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/Users"));

app.listen(port, () => {
  console.log("server is running in port " + port);
});
