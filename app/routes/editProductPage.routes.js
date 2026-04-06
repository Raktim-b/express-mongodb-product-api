const express = require("express");
const editProductRouter = express.Router();
const editProductController = require("../controller/editProductPage.controller");
editProductRouter.get("/edit/:id", editProductController.editProductPage);
editProductRouter.put("/update/:id", editProductController.updateProduct);
module.exports = editProductRouter;
