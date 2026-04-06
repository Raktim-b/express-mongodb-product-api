const ProductModel = require("../model/product.db");
const httpStatusCode = require("../util/httpStatusCode");
class ProductPageController {
  async productPage(req, res) {
    // const products = await ProductDetails.find();
    try {
      const products = await ProductModel.find({ isDelete: false });
      res.render("product", {
        title: "Product",
        data: products,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}
module.exports = new ProductPageController();
