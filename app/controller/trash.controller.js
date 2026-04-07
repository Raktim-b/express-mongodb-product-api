const httpStatusCode = require("../util/httpStatusCode");
const ProductDetails = require("../model/product.db");
class TrashController {
  async Trash(req, res) {
    try {
      const data = await ProductDetails.find({ isDelete: true });
      res.render("trash", {
        title: "trash",
        data: data,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
  async Restore(req, res) {
    try {
      const id = req.params.id;
      await ProductDetails.findByIdAndUpdate(
        id,
        { isDelete: false },
        { new: true },
      );
      return res.redirect("/products/trash");
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
  async HardDelete(req, res) {
    try {
      const id = req.params.id;
      await ProductDetails.findByIdAndDelete(id);
      return res.redirect("/products/trash");
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new TrashController();
