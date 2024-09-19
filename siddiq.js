const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
//port le leta hu env sa
require("dotenv").config();
const port=process.env.port||3001;

const app = express();
app.use(bodyParser.json());
const newroute=require("./routes/siddiqapi")
app.use("/siddiq/v1/",newroute);

app.listen(port, () => {
    console.log("Server is starting on port 3048");
});
//by default wala
app.get("/", (req, res) => {
    res.send(`<h1>Sending data from server to browser updated 2</h1>`);
});

app.get("/getwala", (req, res) => {
    res.send("new walaa hai");
});
app.post("/postwala", (req, res) => {
    const{name,age}=req.body
    console.log(name);
    console.log(age);
    res.send("data successful send ho gya hai");
});

// mongoose.connect("mongodb+srv://sid370578:4QUNX5qgCYCpyq75@clustermerninstagramupd.ek4jj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMernInstagramUpdated")
//     .then(() => {
//         console.log("MongoDB connection successful updated");
//     })
//     .catch((err) => {
//         console.log("MongoDB connection error: ", err);
//     });

//function call ka through db connect kr raha hu
const dbwalafunctionjoconnectkregadbsa=require("./config/database")
dbwalafunctionjoconnectkregadbsa();