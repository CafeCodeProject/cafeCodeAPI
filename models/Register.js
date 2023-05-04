const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    registerCode: {
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
    registerCreated: {
        type: Date,
        default: Date.now
    }
});