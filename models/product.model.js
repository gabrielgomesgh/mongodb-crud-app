const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please, put a product name"]
        },

        quantity: {
            type: Number,
            require: true,
            default: 0
        },

        price: {
            type: Number,
            require: true,
            default: 0
        },

        Description: {
            type: String,
            require: 0
        },

        image: {
            type: String,
            require: false
        }
    }
)

const Product = mongoose.model("Product", productSchema);

module.exports = Product;