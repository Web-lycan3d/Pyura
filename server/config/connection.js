/** @format */

const mongoose = require("mongoose");
const config = require("config");
const dbUrl = config.get("mongourl");

module.exports = async function connection() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
