const mindmapModel = require("../models/mindmap");
const moment = require("moment");
moment.locale("vi");

const mindMapcontroller = {
  getAll: async (req, res) => {
    try {
      let data = await mindmapModel.find({ userId: req.params.id });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(404).send(err);
    }
  },
  getById: async (req, res) => {
    try {
      let data = await mindmapModel.findById(req.params.id);
      return res.status(200).json(data);
    } catch (err) {
      return res.status(404).send(err);
    }
  },
  post: async (req, res) => {
    try {
      const currentDate = moment().format("LLL");
      const data = { ...req.body, createdAt: currentDate };
      await mindmapModel.create(data);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const data = req.body;
      let response = await mindmapModel.findByIdAndUpdate(req.params.id, {
        name: data.name,
        title: data.title,
        data: data.flow,
      });
      if (response) {
        return res.status(200).json(data);
      }
    } catch (error) {
      return res.status(400).send("Cannot delete");
      
    }
    else {
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
