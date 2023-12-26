const mongoose = require("mongoose");
const { Schema } = mongoose;

const mindmapSchema = new Schema({
  userId: String,
  name: String,
  title: String,
  data: Array,
  createdAt: String,
});
const Mindmap = mongoose.model("Mindmap", mindmapSchema);

module.exports = Mindmap;
