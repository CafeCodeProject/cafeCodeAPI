const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    cardCode: {
        type: String,
        required: true,
        trim: true
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cafeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe'
    },
    cardCreated: {
        type: Date,
        default: Date.now
    }
});