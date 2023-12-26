const mindmapModel = require("../models/mindmap");
const mindMapcontroller = {
  getAll: async (req, res) => {
    let data = await mindmapModel.find({ userId: req.params.userId });
    return res.status(200).json(data);
  },
  getById: async (req, res) => {
    let data = await mindmapModel.findById(req.params.id);
    return res.status(200).json(data);
  },
  post: async (req, res) => {
    const data = req.body;
    await mindmapModel.create(data);
    return res.status(200).json(data);
  },
};

module.exports = mindMapcontroller;
