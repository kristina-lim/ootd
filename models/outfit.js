const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outfitSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        data: Buffer,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    outerwear: {
        type: String,
        enum: ['XS', 'S', 'M', 'L', 'XL']
    },
    top: {
        type: String,
        enum: ['XS', 'S', 'M', 'L', 'XL']
    },
    bottom: {
        type: String,
        enum: ['23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33'],
        enum: ['26', '28', '29', '30', '31', '32', '33', '34', '36', '38', '40']
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    }
});

module.exports = mongoose.model('Outfit', outfitSchema);