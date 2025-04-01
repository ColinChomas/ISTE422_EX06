const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hallo Welt! Mein Gott, endlich ist es richtig!');
    });

app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${port}`);
});