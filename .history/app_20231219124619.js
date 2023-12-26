const express = require("express");
const connection = require("./config/database");
const mindmapRouter = require("./routes/mindmapRouter");
const mindmapModels = require("./models/mindmap");
const port = 8080;
const hostname = "localhost";
const app = express();

// app.use("/", (req, res) => {
//   res.send("hi");
// });

app.use("/api/v1/mindmap", mindmapRouter);

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
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
