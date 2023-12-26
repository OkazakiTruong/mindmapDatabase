const mindmapModel = require("../models/mindmap");
const moment = require("moment");
moment.locale("vi");

const mindMapcontroller = {
  getAll: async (req, res) => {
    try {
      let data = await mindmapModel.findById(req.params.id);
      return res.status(200).json(data);
    } catch (err) {
      return res.status(404);
    }
  },
  getById: async (req, res) => {
    try {
      let data = await mindmapModel.findById(req.params.id);
      return res.status(200).json(data);
    } catch (err) {
      return res.status(404);
    }
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
      name: data.name,
      title: data.title,
      data: data.flow,
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
