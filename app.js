const express = require("express");
const app = express();
const path = require('path');
const user_Routes = require("./Routes/user_Routes")
require('dotenv').config({ path: path.resolve(__dirname, 'confiq', 'confiq.env') });
app.use(express.urlencoded({ extended: true }));



app.use("/",user_Routes)
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
module.exports= app;