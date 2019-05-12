const validate = require ('mongoose-validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [2,30],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
        httpStatus: 400
    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: true,
        message: 'Name should contain alpha-numeric characters only',
        httpStatus: 400,
    })
];

const emailValidator = [
    validate({
        validator: 'isEmail',
        message: 'Invalid email adress has been passed'
    })
];

const mobilePhoneValidato = [
    validate({
        validator: 'isMobilePhone',
        message: 'Invalid mobile phone number has been passed'
    })
];

const CustomerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        validate: nameValidator
    },
    lastName: {
      type: String,
      required: true,
      validate: nameValidator
    },
    email: {
        type: String,
        required: true,
        validate: emailValidator
    },
    mobile: {
        type: Number,
        required: true,
        validate: mobilePhoneValidato
    }
});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;



