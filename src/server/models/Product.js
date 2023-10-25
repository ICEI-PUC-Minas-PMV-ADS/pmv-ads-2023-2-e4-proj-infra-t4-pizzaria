// const mongoose = require("mongoose");

// const ProductsSchema = new mongoose.Schema(
//   {
//     title: { type: String, require: true, unique: true },
//     desc: { type: String, require: true },
//     img: { type: String, require: true },
//     categories: { type: Array },
//     size: { type: String },
//     color: { type: String },
//     price: { type: Number, require: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Products", ProductsSchema)

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: String },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);