const mongoose = require("mongoose");
const connection = async () => {
  try {
    console.log("check");
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
