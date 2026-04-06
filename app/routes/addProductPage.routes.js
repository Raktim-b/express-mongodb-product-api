const express = require("express");
const addProductRouter = express.Router();
const addProductController = require("./../controller/addProductPage.controller");
addProductRouter.get("/add", addProductController.addProduct);
addProductRouter.post("/add", addProductController.createProduct);

module.exports = addProductRouter;
