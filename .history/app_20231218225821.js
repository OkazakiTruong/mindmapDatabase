const express = require("express");
const connection = require("./config/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const port = 8080;
const hostname = "localhost";
const app = express();

app.use("/", (req, res) => {
  res.send("hi");
});

//test connection

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log("App is running on port", port);
    });
  } catch (error) {
    console.log(error);
  }
})();
