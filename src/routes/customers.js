const Customer = require('../models/Customer');
const express = require('express');
const router = express.Router();

// get all customers
router.get('/', async (req, res) => {
    const customers = await Customer.find();
    res.status(200).send(customers);
});

//get single customer
router.get('/:id', async (req, res) => {
    let customer = await Customer.findById(req.params.id);
    res.status(200).send(customer);
});

//post a new customer
router.post('/', async (req, res) => {
    let customer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
    });

    customer = await customer.save();
    
    res.status(200).send(customer);
});

// delete all customers
router.delete('/', async (req, res) => {
    await Customer.deleteMany({__v: 0});
    res.status(200).send('Deleted all customers');
});

//delete single customer
router.delete('/:id', async (req, res) => {
    let customer = await Customer.findById({ _id: req.params.id});
    if (!customer) return res.status(404).send('There are no customer with given id in the database');
    await Customer.findByIdAndRemove(req.params.id);
    res.status(200).send(`deleted customer with _id: ${req.params.id}`);
});



module.exports = router;