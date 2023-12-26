const express = require("express");
const port = 8080;
const app = express();

app.use("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log("App is running on port", port);
});
