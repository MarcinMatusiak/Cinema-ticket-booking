const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeatSchema = new Schema({
    row:{
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    number:{
        type: Number,
        min: 1,
        max: 5,
        requried: true
    },
    type:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    movie: {
        type: String,
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId
    }

});

const SeatModel = mongoose.model('Seat', SeatSchema);

module.exports = SeatModel;