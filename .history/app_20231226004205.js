const express = require("express");
const connection = require("./config/database");
const mindmapRouter = require("./routes/mindmapRouter");
var bodyParser = require("body-parser");
const port = process.env.HOST;
const hostname = "localhost";
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// app.use("/", (req, res) => {
//   res.send("hi");
// });
app.use(cors(corsOptions));
app.use(bodyParser.json());
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
