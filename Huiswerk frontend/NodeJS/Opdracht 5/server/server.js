const express = require('express');
const app = express();

const product = [
    { id: 1, naam: "appel", prijs: 1.50}
];

app.get('/api/product', (req, res) => {
    res.json(product);
});

app.listen(3001, () => {
    console.log('Server is runnning on http://localhost:3001');
});