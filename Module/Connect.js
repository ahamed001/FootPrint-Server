const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDB = async()=> {
    try {
        await mongoose.connect(process.env.MongoDB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');
    } 
    catch (err) {
        console.error(err);
    }
}

module.exports = ConnectDB;