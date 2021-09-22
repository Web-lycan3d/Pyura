/** @format */

const mongoose = require("mongoose");

module.exports = async function connection() {
  try {
    await mongoose.connect(
      `mongodb+srv://root:abhi0317@demo.mb7pd.mongodb.net/pyura`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
