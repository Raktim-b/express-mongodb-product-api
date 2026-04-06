const express = require("express");
const productRouter = express.Router();
const ProductPageController = require("./../controller/productPage.controller");
productRouter.get("/", ProductPageController.productPage);
module.exports = productRouter;
