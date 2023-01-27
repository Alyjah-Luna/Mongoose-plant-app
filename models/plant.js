const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
    }, {
    timestamps: true
})

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
    },
    sunRequirement: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Plant', plantSchema)
