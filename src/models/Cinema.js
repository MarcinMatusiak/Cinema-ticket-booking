const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
    row:{
        type: Number,
        min: 1,
        max: 3,
        required: true
    },
    number:{
        type: Number,
        min: 1,
        max: 7,
        requried: true
    },
    ticket: [TicketSchema],
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }

});
const TicketSchema = new Schema ({
    name: {
        type: String,
        required: true,
        enum: ['ulgowy', 'studencki', 'normalny', 'senior']
    },
    price: {
        type: Number,
        required: true,
        enum: [15, 17, 21, 18]
    }
})
const Cinema = mongoose.model('Cinema', CinemaSchema);

module.exports = Cinema;