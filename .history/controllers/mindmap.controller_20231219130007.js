const mindmapModel = require("../models/mindmap");
const mindMapcontroller = {
  getAll: (req, res) => {
    res.json({
      data: "mind map controller",
    });
  },
};

module.exports = mindMapcontroller;
