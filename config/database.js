const mongoose = require("mongoose");
require("dotenv").config();
const dbwalafunctionjoconnectkregadbsa=()=>
{
mongoose.connect(process.env.DBUrlHai)
    .then(() => {
        console.log("MongoDB connection successful updated env mai url daalne ka baad");
    })
    .catch((err) => {
        console.log("MongoDB connection error: ", err);
    });

}


module.exports = dbwalafunctionjoconnectkregadbsa;