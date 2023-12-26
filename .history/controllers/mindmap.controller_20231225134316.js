const mindmapModel = require("../models/mindmap");
const moment = require("moment");
moment.locale("vi");

const mindMapcontroller = {
  getAll: async (req, res) => {
    let data = await mindmapModel.find({ userId: req.params.id });
    return res.status(200).json(data);
  },
  getById: async (req, res) => {
    const { userId, id } = req.params;
    console.log(userId);
    let data = await mindmapModel.findById(id);
    return res.status(200).json(data);
  },
  post: async (req, res) => {
    const currentDate = moment().format("LLL");
    console.log(currentDate);
    const data = { ...req.body, createdAt: currentDate };
    const test = await mindmapModel.create(data);
    if (test) {
      return res.status(201).json(data);
    } else {
      return res.status(400).send("Cannot post");
    }
  },
  update: async (req, res) => {
    const data = req.body;
    let response = await mindmapModel.findByIdAndUpdate(req.params.id, {
      data: data,
    });
    if (response) {
      console.log("Sửa đổi thành công");
      return res.status(200).json(data);
    } else {
      return res.status(400).send("Cannot delete");
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
