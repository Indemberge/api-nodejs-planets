const express = require('express');

const app = express();

app.get('/', (get, res) => {
    res.send("Hello Planets");
});

app.listen(3001);