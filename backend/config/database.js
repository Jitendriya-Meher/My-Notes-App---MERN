
const mongoose = require('mongoose');
// import mongoose from 'mongoose';

require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config();

const dbConnect = () => {

    mongoose.connect( process.env.DATABASE_URL)
    .then( () => console.log('connection Successfully to DataBase'))
    .catch( (err) => {
        console.log('connection fails from DataBase');
        console.error(err);
    });

};

module.exports = dbConnect;
// export default dbConnect;