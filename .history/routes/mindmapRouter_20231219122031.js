const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("mind map router");
  res.send("Danh sách người dùng!!");
});

module.exports = router;
