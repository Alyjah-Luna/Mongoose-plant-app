const mongoose = require('mongoose')

const Schema = mongoose.Schema

const plantSchema = new Schema({
    typeof: {
        type: String,
        enum: ["Climbers", "Creepers", "Herbs", "Shrubs", "Trees"]
    },
    origin: {
        type: String,
        enum: ["Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"]
    }, 
    requirement: {

    }
})

module.exports = mongoose.model("Plant", plantSchema)