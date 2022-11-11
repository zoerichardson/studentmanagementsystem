const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyparser = require("body-parser");
const path = require('path');
const connectDB = require('./server/database/connection');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080


// mongodb connection
connectDB();

app.use(bodyparser.urlencoded({ extended : true}))

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/images', express.static(path.resolve(__dirname, "assets/images")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))



//load routers
app.use('/', require('./server/routes/router'));


app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)})