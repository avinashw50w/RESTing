var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Players schema
var playerSchema = new Schema( {
    name: String,
   /* create_date: {
        type: Date,
        default: Date.now
    }*/
});

var Players = module.exports = mongoose.model('Data', playerSchema);

module.exports.getPlayers = function(callback, limit) {
    Players.find(callback).limit(limit);
}
