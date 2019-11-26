//dependencies
require("dotenv").config();
const express = require("express");

//establish PORT and create server
const PORT = process.env.PORT || 3000;
const app = express();

//bring in models
const db = require("./models");

// configure middleware
app.use(express.urlencoded( { extended: true} ) );
app.use(express.json());

//sets static routing to the public folder
app.use(express.static("public"));

//routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//sync models & listen on server
db.sequelize.sync().then(function () {
    app.listen(PORT, function (){
        console.log("App listening on PORT: " + PORT);
    })
};