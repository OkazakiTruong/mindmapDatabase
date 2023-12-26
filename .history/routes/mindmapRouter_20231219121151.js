const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Danh sách người dùng!!");
});
