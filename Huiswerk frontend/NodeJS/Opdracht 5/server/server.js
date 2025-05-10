const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const product = [
    { id: 1, naam: "appel", prijs: 1.50},
    { id: 2, naam: "peer", prijs: 1.20},
    { id: 3, naam: "banaan", prijs: 1.00},
    { id: 4, naam: "druif", prijs: 2.00},
    { id: 5, naam: "kiwi", prijs: 1.80},
    { id: 6, naam: "mango", prijs: 2.50},
    { id: 7, naam: "ananas", prijs: 3.00},
    { id: 8, naam: "watermeloen", prijs: 4.00}
];

app.get('/api/product', (req, res) => {
    res.json(product);
});

app.listen(3001, () => {
    console.log('Server is runnning on http://localhost:3001');
});