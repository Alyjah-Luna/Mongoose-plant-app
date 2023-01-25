const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
        enum: ["Climbers", "Creepers", "Herbs", "Shrubs", "Trees"]
    },
    origin: {
        type: String,
        enum: ["Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"]
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

module.exports = mongoose.model("Plant", plantSchema)