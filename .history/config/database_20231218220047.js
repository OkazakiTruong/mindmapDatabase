const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect("mongodb://root:123456@127.0.0.1:27017");
    const state = Number(mongoose.connection.readyState);
    console.log(state);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
