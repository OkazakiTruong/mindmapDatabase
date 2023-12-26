//Config to connect db
require("dotenv").config();
const mongoose = require("mongoose");
const dbHost = process.env.DB_HOST;
const connection = async () => {
  try {
    await mongoose.connect(`${dbHost}`);
    const state = Number(mongoose.connection.readyState);
    console.log(state);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
