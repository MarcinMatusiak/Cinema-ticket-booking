import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to our cinema app");
})

const port = process.env.PORT || 3000; //default port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});