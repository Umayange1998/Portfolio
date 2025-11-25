const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
     image_url: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    githubLink: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      default: null, // optional
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Projects", ProjectSchema);
