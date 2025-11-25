const express =require ('express');
const app =express();
const cors = require('cors');
app.use(express.json());
require('dotenv').config();

const Port = process.env.PORT

// app.use(cors({
//     origin: "https://company-sample-landing-page-umayange.netlify.app/", 
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
// }));
app.use(cors());

const connectDB = require("./Config/db"); 
connectDB();
///////////////////////////Routers////////////

const projecstRouter = require('./routes/Projects');
app.use("/projects", projecstRouter);


app.listen(Port,()=>{
    console.log(`Sewrver Running on Port ${Port}`)
})