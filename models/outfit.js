const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        enum: ['👍', '😍', '🤩', '🥳', '🫶', '🤤',  '😊', '👎']
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
});

const outfitSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        data: Buffer,
        // required: true
    },
    agenda: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        enum: ['😊', '🥹', '🤪', '😍', '😤', '😭', '🫠', '🤒'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    outerwear: {
        type: String,
        enum: ['N/A', 'XS', 'S', 'M', 'L', 'XL']
    },
    top: {
        type: String,
        enum: ['N/A', 'XS', 'S', 'M', 'L', 'XL']
    },
    womBottom: {
        type: String,
        enum: ['N/A', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33']
    },
    manBottom: {
        type: String,
        enum: ['N/A', '26', '28', '29', '30', '31', '32', '33', '34', '36', '38', '40']
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Outfit', outfitSchema);