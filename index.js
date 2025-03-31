const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hallo Welt!!');
    });

app.listen(port, '159.65.35.97', () => {
    console.log(`Server listening at http://159.65.35.97:${port}`);
});