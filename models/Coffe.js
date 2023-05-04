const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CafeSchema = new Schema({
    cafeName: {
        type: String,
        required: true,
        trim: true
    },
    cafeCreated: {
        type: Date,
        default: Date.now
    }
});