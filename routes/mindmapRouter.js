const express = require("express");
const router = express.Router();
const mindMapcontroller = require("../controllers/mindmap.controller");

router.get("/user/:id", mindMapcontroller.getAll);
router.get("/:id", mindMapcontroller.getById);
router.post("/", mindMapcontroller.post);
router.delete("/:id", mindMapcontroller.delete);
router.patch("/:id", mindMapcontroller.update);

module.exports = router;
