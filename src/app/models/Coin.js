const mongoose = require("mongoose");

// Define the schema for the cryptocurrency
const coinSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true, // Assuming the "id" is unique for each cryptocurrency
    },
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
    is_new: {
      type: Boolean,
      default: false, // Default to false if not specified
    },
    is_active: {
      type: Boolean,
      default: true, // Default to true if not specified
    },
    type: {
      type: String,
      enum: ["coin", "token"], // You can adjust this enum based on expected values
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Create and export the Coin model
module.exports = mongoose.model("Coin", coinSchema);
