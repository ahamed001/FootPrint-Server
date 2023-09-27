const mongoose = require('mongoose');

const footprintschema = new mongoose.Schema({
    email : String,
    password : String,
    firstname: String,
    lastname: String,
})

const footprintmodel = mongoose.model('joinus',footprintschema)
module.exports = footprintmodel