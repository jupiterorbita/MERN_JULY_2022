const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    make: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: 3
    },
    image: {
        type: String,
    },
    color: {
        type: String,
        required: [true, "please enter a color"],
    },
    favorite: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;