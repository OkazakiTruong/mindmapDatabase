const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect("mongodb://root:123456@127.0.0.1:27017/admin");
    console.log("check");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
