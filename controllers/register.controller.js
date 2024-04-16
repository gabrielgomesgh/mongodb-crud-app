const Register = require('../models/register.model.js');

//GET all registers
const getRegisters = async (req, res) => {
    try {
        const registers = await Register.find({})
        res.status(200).json(registers);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// GET a registers by id
const getRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const register = await Register.findById(id);
        res.status(200).json(register);
    } catch (error) {
        res.status(500).json({ message: message.error })
    }
}
// CREATE a register
const createRegister = async (req, res) => {
    try {
        const register = await Register.create(req.body)
        res.status(200).json(register)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// UPDATE a register
const updateRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const register = await Register.findByIdAndUpdate(id, req.body)

        if (!register) {
            return res.status(404).json({ message: "Register not found" })
        }

        const updateRegister = await Register.findById(id);
        res.status(200).json(updateRegister)
    } catch (error) {
        res.status(500).json({ message: message.error })
    }
}

// DELETE a register
const deleteRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const register = await Register.findByIdAndDelete(id);

        if (!register) {
            return res.status(404).json({ message: "Register not found" })
        }
        res.status(200).json({ message: "Register deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getRegisters,
    getRegister,
    createRegister,
    updateRegister,
    deleteRegister
};