require("dotenv").config();
const express = require("express");
const Dbcon = require("./app/config/db");
const apiRoutes = require("./app/routes/product.routes");
const productRoutes = require("./app/routes/productPage.routes");
const addProductRoutes = require("./app/routes/addProductPage.routes");
const editProductRoutes = require("./app/routes/editProductPage.routes");
const softDeleteRoutes = require("./app/routes/softDelete.routes");
const trashRoutes = require("./app/routes/trashPage.routes");
const cors = require("cors");
const app = express();
Dbcon();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", (req, res) => {
  res.redirect("/products");
});
app.use((req, res, next) => {
  res.locals.search = "";
  next();
});
// app.use("/api", apiRoutes);
app.use("/products", productRoutes);
app.use("/products", addProductRoutes);
app.use("/products", editProductRoutes);
app.use("/products", softDeleteRoutes);
app.use("/products", trashRoutes);

app.use(express.static("public"));
app.use("/upload", express.static("upload"));
const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
  console.log(`Server created at ${PORT}`);
});
