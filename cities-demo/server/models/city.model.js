const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    population: {
      type: Number,
      required: [true, "{PATH} is required."],
      min: [0, "{PATH} must be {MIN} at minimum."],
    },
    imgUrl: {
      type: String,
      required: [true, "{PATH} is required."],
    },
  },
  { timestamps: true }
);

// register our model and enforce the schema
const City = mongoose.model("City", CitySchema);

module.exports = City;
