const express = require('express');
const path = require('path');
const {procesarTexto} = require("./procesarTexto");
const app = express();

app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/enviar', function (req, res) {
    procesarTexto(req.body);
    res.sendFile(path.join(__dirname + '/respuesta.html'));
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
