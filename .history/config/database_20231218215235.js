const connection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
  } catch (error) {
    handleError(error);
  }
};

module.exports = connection;
