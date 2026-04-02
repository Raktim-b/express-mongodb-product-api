const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  size: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: [String],
    required: true,
  },
  desc: {
    type: String,
    required: true,
    minlength: 20,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});
const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;
