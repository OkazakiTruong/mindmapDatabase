//Config to connect db
require("dotenv").config();
const mongoose = require("mongoose");
const dbURL = process.env.DB_URL;
const connection = async () => {
  try {
    await mongoose.connect(`${dbURL}`);
    const state = Number(mongoose.connection.readyState);
    console.log(state);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
