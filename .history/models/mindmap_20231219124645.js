import mongoose from 'mongoose';
const { Schema } = mongoose;
const mindmapSchema = new Schema({
  name: String,
  title: String,
  data: Array,
});
const Mindmap = mongoose.model("Mindmap", mindmapSchema);

module.exports = Mindmap;
