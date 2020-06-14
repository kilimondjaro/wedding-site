const express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
var bodyParser = require('body-parser')
var cors = require('cors')
const { addGuest, getWishlist, reserverGift, deleteGift, addGift } = require('./firebase')
const port = process.env.PORT || 8080;

const app = express();
// app.use(favicon(__dirname + '/build/favicon.png')); 

// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Ping
app.get('/ping', function (req, res) {
    return res.send('pong');
});

// API
app.get('/api/getWishlist', function(_, res) {    
    getWishlist()
        .then(data => res.send(data))
        .catch(() => res.sendStatus(500));    
});

app.post('/api/addGuest', function(req, res) {    
    addGuest(req.body)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));    
});

app.post('/api/reserveGift', function(req, res) {    
    reserverGift(req.body)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));    
});

app.post('/api/deleteGift', function(req, res) {    
    deleteGift(req.body)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));    
});

app.post('/api/addGift', function(req, res) {    
    addGift(req.body)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));    
});

// React
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);