const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter product name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "please enter the product description"]
    },
    price: {
        type: Number,
        required: [true, "please enter the product price"],
        maxLength: [8, "price cannot exceed 8 characters"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            require: true
        },
        url: {
            type: String,
            require: true
        }
    }],
    category: {
        type: String,
        required: [true, "please enter product category"]

    },
    Stock: {
        type: Number,
        require: [true, "please enter product stock"],
        maxLength: [4, "stock connot exceed 4 characters"],
        default: true
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now

    }


})
module.exports = mongoose.model("Product", productSchema)