const mindmapModel = require("../models/mindmap");
const mindMapcontroller = {
  getAll: async (req, res) => {
    let data = await mindmapModel.find({});
    return res.status(200).json(data);
  },
  getById: async (req, res) => {
    let data = await mindmapModel.findById(req.params.id);
    return res.status(200).json(data);
  },
  post: async (req, res) => {
    return res.status.json(req.body);
  },
};

module.exports = mindMapcontroller;
