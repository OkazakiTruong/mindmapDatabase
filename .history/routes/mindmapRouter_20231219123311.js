const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("mind map router");
  res.status(200).json({
    data: "done",
  });
});

module.exports = router;
