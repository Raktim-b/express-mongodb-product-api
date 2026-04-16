const ProductModel = require("../model/product.db");
const httpStatusCode = require("../util/httpStatusCode");
const fs = require("fs");
class EditProductProductPage {
  async editProductPage(req, res) {
    try {
      const id = req.params.id;
      const editProductItem = await ProductModel.findById(id);
      res.render("editProduct", {
        title: "Edit Product",
        data: editProductItem,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
  async updateProduct(req, res) {
    try {
      const id = req.params.id;
      const updatData = await ProductModel.findById(id);
      if (!updatData) {
        return res.status(httpStatusCode.NOT_FOUND).json({
          success: false,
          message: "id not found",
        });
      }
      let updateObj = { ...req.body };
      if (req.file) {
        if (updatData.image) {
          fs.unlink(`./${updatData.image}`, (err) => {
            if (err) {
              console.log("Error deleting file:", err);
            } else {
              console.log("File deleted successfully");
            }
          });
        }
        updateObj.image = req.file.path;
      }
      await ProductModel.findByIdAndUpdate(id, updateObj, {
        new: true,
      });

      return res.redirect("/products");
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}
module.exports = new EditProductProductPage();
