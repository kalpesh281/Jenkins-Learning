const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Age: {
      type: Number,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
