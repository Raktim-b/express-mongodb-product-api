const express = require("express");
const trashRouter = express.Router();
const TrashController = require("./../controller/trash.controller");
trashRouter.get("/trash", TrashController.Trash);
trashRouter.get("/restore/:id", TrashController.Restore);
trashRouter.get("/hardDelete/:id", TrashController.HardDelete);
module.exports = trashRouter;
