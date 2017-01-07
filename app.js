var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Player = require('./models/Player.model');

mongoose.connect('mongodb://localhost/penguinPlayers');

app.use(express.static('Public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var server = app.listen(3000, function() {
    console.log('server is running\nlistening on port 3000');
});

// Shows the Penguin Players data
app.get('/api/players', function(req, res) {
    Player.getPlayers(function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    });
});

// Get Player data by its ID
app.get('/api/players/:id', function(req, res) {
    Player.getPlayerById(req.params.id, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

// Add players data
app.post('/api/players', function(req, res) {
    var playerObj = req.body;
    Player.createPlayers(playerObj, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    });
});

// updates Player data by its ID
app.put('/api/players/:id', function(req, res) {
    var id = req.params.id;
    var playerObj = req.body;
    Player.updatePlayerById(id, playerObj, {}, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
})


// deletes a player by its ID
app.delete('/api/players/:id', function(req, res) {
    var id = req.params.id;
    Player.deletePlayerById(id, function(err, data) {
        if(err) {
            throw err;
        }
        res.send('deleted the player with ID : ' + id);
    });
});
