const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

// GET all products
router.get('/', getProducts);

// GET a product by Id
router.get("/:id", getProduct);

// CREATE a product
router.post("/", createProduct);

// UPDATE a product
router.put("/:id", updateProduct);

// DELETE a product
router.delete("/:id", deleteProduct);




module.exports = router;