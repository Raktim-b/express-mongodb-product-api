const express = require("express");
const editProductRouter = express.Router();
const editProductController = require("../controller/editProductPage.controller");
const ProductImage = require("../middleware/fileUploades");
editProductRouter.get("/edit/:id", editProductController.editProductPage);
editProductRouter.post(
  "/update/:id",
  ProductImage.single("image"),
  editProductController.updateProduct,
);
module.exports = editProductRouter;
