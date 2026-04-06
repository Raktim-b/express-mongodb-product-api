const express = require("express");
const softDeleteRouter = express.Router();
const softDeleteController = require("./../controller/softDelete.controller");
softDeleteRouter.delete("/delete/:id", softDeleteController.SoftDelete);
module.exports = softDeleteRouter;
