const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CafeSchema = new Schema({
    cafeName: {
        type: String,
        required: true,
        trim: true
    },
    coffeMail: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    cafePassword: { 
        type: String,
        required: true
    },
    cafeCreated: {
        type: Date,
        default: Date.now
    }
});