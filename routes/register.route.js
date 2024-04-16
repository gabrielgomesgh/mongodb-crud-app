const express = require("express");
const Register = require("../models/register.model.js");
const router = express.Router();
const { getRegisters, getRegister, createRegister, updateRegister, deleteRegister } = require('../controllers/register.controller.js')

// Route GET all products
router.get('/', getRegisters);
// Route GET a product by id
router.get('/:id', getRegister);
// Route CREATE a product
router.post('/', createRegister);
// Route Update a product
router.put('/:id', updateRegister)
// Route DELETE a product
router.delete('/:id', deleteRegister)

module.exports = router;