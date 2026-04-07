const express = require("express");
const addProductRouter = express.Router();
const addProductController = require("./../controller/addProductPage.controller");
addProductRouter.get("/add", addProductController.addProduct);
addProductRouter.post("/post", addProductController.createProduct);

module.exports = addProductRouter;
