const mindmapModel = require("../models/mindmap");
const mindMapcontroller = {
  getAll: async (req, res) => {
    let data = await mindmapModel.find({});
    return res.status(200).json(data);
  },
};

module.exports = mindMapcontroller;
