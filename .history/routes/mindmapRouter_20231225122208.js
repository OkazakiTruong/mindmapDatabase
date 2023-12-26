const express = require("express");
const router = express.Router();
const mindMapcontroller = require("../controllers/mindmap.controller");

router.get("/:id", mindMapcontroller.getAll);
router.get("/:id", mindMapcontroller.getById);
router.post("/", mindMapcontroller.post);
router.delete("/:id", mindMapcontroller.delete);
router.patch("/", mindMapcontroller.update);

module.exports = router;
