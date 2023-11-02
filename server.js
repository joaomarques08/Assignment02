const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/config");
const apiRoutes = require("./routes/api");

mongoose.connect(config.mongoUri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.status(200).json({
        message: 'Welcome to Marketplace'
    });
})

app.use('/api', apiRoutes)


app.listen(8080, () => {
    console.log("Server Initiated");
})

