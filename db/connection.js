
const mongoose = require("mongoose")
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, 'confiq', 'confiq.env') });

const connectDb = async () =>{
    mongoose.connect(process.env.MONGODB_URI)
    .then((res)=> console.log(`database conacted with ${res.connection.host}`))
    .catch((err) => console.log(err.massege));
    
}

module.exports= connectDb
