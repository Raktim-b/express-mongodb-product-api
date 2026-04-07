const ProductModel = require("../model/product.db");
const httpStatusCode = require("../util/httpStatusCode");
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
      const updatData = await ProductModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatData) {
        return res.status(httpStatusCode.NOT_FOUND).json({
          success: false,
          message: "id not found",
        });
      }
      return res.redirect("/products")
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}
module.exports = new EditProductProductPage();
