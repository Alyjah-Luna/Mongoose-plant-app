const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
    },
    origin: {
        type: String,
    }, 
    waterRequirement: {
        type: String,
        required: true
    },
    sunRequirement: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Plant', plantSchema)
