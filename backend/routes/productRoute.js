const express = require("express");
const connectDatabase = require("../config/database");

const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");

const router = express.Router();


router.route("/products").get(getAllProducts);

router.route("/products/new").post(createProduct);

router.route("/products/:id").put(updateProduct).delete(deleteProduct);

router.route("/products/:id").get(getProductDetails);

module.exports = router