require("dotenv").config();
const express = require("express");
const Dbcon = require("./app/config/db");
const apiRoutes = require("./app/routes/product.routes");

const app = express();
Dbcon();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "views");
app.use("/api", apiRoutes);
app.use(express.static("public"));
const PORT = 4005;
app.listen(PORT, () => {
  console.log(`Server created at ${PORT}`);
});
