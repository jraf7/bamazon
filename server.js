require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;
const app = express();

const db = require("./models");

app.use(express.urlencoded( { extended: true} ) );
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function (){
        console.log("App listening on PORT: " + PORT);
    })
});