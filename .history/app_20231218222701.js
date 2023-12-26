const express = require("express");
const connection = require("./config/database");
const port = 8080;
const app = express();

app.use("/", (req, res) => {
  res.send("hi");
});

//test connection

(async () => {
  try {
    await connection();
  } catch (error) {
    console.log(error);
  }
  app.listen(port, () => {
    console.log("App is running on port", port);
  });
})();
