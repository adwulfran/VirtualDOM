var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, '');

// viewed at http://localhost:8080
app.get('/home', function(req, res) {
    res.sendFile(path.join(public, 'src/components/home/home-component.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(public, 'src/components/login/login-component.html'));
});

app.use('/', express.static(public));

app.listen(8080);