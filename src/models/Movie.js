const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    time: { 
        day: {
            type: Array,
            required: true
            enum: ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela']
        },
        hour: {
            type: String,
            required: true
            enum: ['12:00', '15:00', '17:30', '20:00']
        }
    },
    cinemaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cinema'
    },
    
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
