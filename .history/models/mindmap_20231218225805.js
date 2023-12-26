const mindmapSchema = new Schema({
  name: String,
  title: String,
  data: Array,
});
const Mindmap = mongoose.model("Mindmap", mindmapSchema);
const test = new Mindmap({ name: "Truong" });
test.save();
