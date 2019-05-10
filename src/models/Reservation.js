import { isEmail, isMobilePhone } from 'validator';
const mongoose = require();
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    firstName: {
        type: String,
        min: [2, 'First name should have at least 2 characters'],
        required: true
    },
    lastName: {
      type: String,
      min: [2, 'Last name should have at least 2 characters'],
      required: true
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'Invalid email']
    },
    mobile: {
        type: Number,
        required: true,
        validate: [isMobilePhone, 'Invalid mobile']
    }
});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;



