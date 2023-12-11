
const express = require('express');
const app = express();
const cors = require('cors');

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json body
app.use(express.json());

// cors
// option 1
app.use(cors());

// import routes
const authRoute = require("./routes/auth-route.js");
const noteRoute = require("./routes/note-route.js");
app.use("/api/auth",authRoute);
app.use("/api/note",noteRoute);

// mount routes


// start server 
app.listen(PORT, () =>{
    console.log(`server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect = require('./config/database');
const Authroute = require('./routes/auth-route');
dbConnect();

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome To MERN Project Jitendriya !!!</h1>`)
});