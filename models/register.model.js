const mongoose = require('mongoose')

const registerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please, say your name"]
        },

        last_name: {
            type: String,
            require: [true, "Please, provide your last name"]
        },

        age: {
            type: Number,
            require: true,
            default: 0
        },

        email: {
            type: String,
            require: [true, "Please, provide your e-mail"]
        }
    }
)

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;