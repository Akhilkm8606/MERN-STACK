

const mongoose = require("mongoose")


const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, 'confiq', 'confiq.env') });

 const MONGODB_URI = process.env.MONGODB_URI;


 module.exports ={MONGODB_URI}