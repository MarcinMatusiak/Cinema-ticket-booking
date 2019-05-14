const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const bodyParser = require('body-parser');
//const config = require('config');

const customers = require('./routes/customers');

// setup config
/*if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}*/

//setup express and allow cors requests
const app = express();
app.use(cors());


//setup bodyParser
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


//database connection

const db = mongoose.connect('mongodb://localhost:27017/Cinapp', {
    useNewUrlParser: true
});

db
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Could not connect to MongoDB.', err));


app.use('/api', customers);


// run server
const port = process.env.PORT || 3001; //default port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});