const mindmapModel = require("../models/mindmap");
const moment = require("moment");
moment.locale("vi");

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
    const currentDate = moment().format("LLL");
    console.log(currentDate);
    const data = { ...req.body, createdAt: currentDate };
    const test = await mindmapModel.create(data);
    if (test) {
      return res.status(200).json(data);
    } else {
      return res.status(400).send("Cannot post");
    }
  },
  delete: async (req, res) => {
    let data = await mindmapModel.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(400).send("Cannot delete");
    }
  },
};

module.exports = mindMapcontroller;
