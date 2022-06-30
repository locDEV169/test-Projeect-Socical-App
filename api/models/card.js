const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    avatar: { type: String },
    name: {
      type: String,
      require: true,
      index: true,
      unique: true,
    },
    description: { type: String },
    image: { type: String },
    heart: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", CardSchema);
