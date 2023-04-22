const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    rating: {
        type: String,
        min:0,
        max:5,
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
    },
    desc:{
        type: String,
        required: true
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('Hotel',HotelSchema);
    
