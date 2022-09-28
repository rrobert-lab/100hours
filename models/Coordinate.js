const mongoose = require("mongoose");

const CoordinateSchema = new mongoose.Schema({
  
  lon: {
    type: Number,
    required: true,
  },
  lad: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    ref: "User",
  },
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Coordinate", CoordinateSchema);