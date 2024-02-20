const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

const user_Routes = require("./Routes/user_Routes")
require('dotenv').config({ path: path.resolve(__dirname, 'confiq', 'confiq.env') });

 app.use(cors({
    credentials: true,
    origin: true,
}));



app.use("/api/v1",user_Routes)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
module.exports= app;