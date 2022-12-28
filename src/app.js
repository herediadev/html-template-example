const express = require('express');
const path = require('path');
const {processWords} = require("./processWords");
const app = express();

app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/enviar', function (req, res) {
    res.sendFile(path.join(__dirname + '/respuesta.html'));
    processWords(req.body);
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
