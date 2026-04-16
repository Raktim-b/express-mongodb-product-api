const express = require("express");
const addProductRouter = express.Router();
const addProductController = require("./../controller/addProductPage.controller");
const ProductImage = require("../middleware/fileUploades");
addProductRouter.get("/add", addProductController.addProduct);
addProductRouter.post(
  "/post",
  ProductImage.single("image"),
  addProductController.createProduct,
);

module.exports = addProductRouter;
