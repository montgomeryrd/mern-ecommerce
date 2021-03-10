const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('constants');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('get request works')
})

app.get('/api/products', (req, res) => {
    res.json(products)
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    res.json(product);
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})