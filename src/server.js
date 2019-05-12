const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const bodyParser = require('body-parser');
//const config = require('config');
const Customer = require ('./models/Reservation');
const Seat =require ('./models/Seat');

// setup config
/*if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}*/

//setup express and allow cors requests
const app = express();
app.use(cors());
const router = express.Router();
app.use("api", router)

//setup bodyParser
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


//database connection

const db = mongoose.connect('mongodb://localhost:27017/SafetyList', {
    useNewUrlParser: true
});

db
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Could not connect to MongoDB.', err));

//here are out http methods
router.post("/putCustomer", (req, res) => {
  let customer = new Customer();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  customer.message = message;
  customer.id = id;
  customer.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.get("/getCustomer", (req, res) => {
  Customer.find((err, customer) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({
        success: true,
        customer: customer
    });
  });
});

router.delete("/deleteCustomer", (req, res) => {
  const { id } = req.body;
  Customer.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// run server
const port = process.env.PORT || 3001; //default port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});