
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
const contactRoute = require("./routes/contact-route.js");
app.use("/api/auth",authRoute);
app.use("/api/note",noteRoute);
app.use("/api/contact",contactRoute);

// start server 
app.listen(PORT, () =>{
    console.log(`server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect = require('./config/database');
dbConnect();

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome To MERN Project Jitendriya !!!</h1>`);
});