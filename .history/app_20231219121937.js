const express = require("express");
const connection = require("./config/database");
const mindmapRouter = require("./routes/mindmapRouter");
const port = 8080;
const hostname = "localhost";
const app = express();

app.use("/", (req, res) => {
  res.send("hi");
});

app.use("/mindmap/", mindmapRouter);
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
