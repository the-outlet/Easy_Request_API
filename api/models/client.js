var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;