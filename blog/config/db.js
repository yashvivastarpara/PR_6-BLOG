const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/blog");
  console.log("start connect mongoDB");
};
module.exports = connect;
