const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outfitSchema = new Schema({
    img: {
        type: String,
        data: Buffer
    },
    title: {
        type: String
    },
    body: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    // top: {
    //     type: String,
    //     required: true,
    //     enum: []
    // }

});

module.exports = mongoose.model('Outfit', outfitSchema);