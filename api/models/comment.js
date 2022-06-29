const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    comment: { type: String },
    heart: { type: Number },
    cardId: { type: mongoose.Schema.Types.ObjectId, ref: "Card" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
