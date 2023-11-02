const mongoose =  require('mongoose');

const userSchema = new mongoose.Schema({
    username,
    password,
    email,
    role: {
      type: String,
      enum: ["user", "admin"], 
      default: "user", 
    }
  })

const user = mongoose.model("user", userSchema)

module.exports = user