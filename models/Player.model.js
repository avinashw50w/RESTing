var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    position: String,
    weight: String,
    height: String,
    imageUrl: String,
    birthplace: String,
    age: Number,
    name: String,
    birthdate: Date,
    number: Number
});

var Player = module.exports = mongoose.model('Player', PlayerSchema);

// get platers data
module.exports.getPlayers = function(callback, limit) {
    Player.find(callback).limit(limit);
}

// get player data by its _id
module.exports.getPlayerById = function(id, callback) {
    Player.findById(id, callback);
}

// create players data
module.exports.createPlayers = function(playerObj, callback) {
    Player.create(playerObj, callback);
}

// delete Player data by its _id
module.exports.deletePlayerById = function(id, callback) {
    var query = {_id: id};
    Player.remove(query, callback);
}

// update player data by its _id
module.exports.updatePlayerById = function(id, playerObj, options, callback) {
    var query = {_id: id};
    var update = {
        position: playerObj.position,
        weight: playerObj.weight,
        height: playerObj.height,
        imageUrl: playerObj.imageUrl,
        birthplace: playerObj.birthplace,
        age: playerObj.age,
        name: playerObj.name,
        birthdate: playerObj.birthdate,
        number: playerObj.number
    }
    Player.findOneAndUpdate(query, update, options, callback);
}
