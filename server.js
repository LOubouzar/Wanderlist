//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");

var PORT = process.env.PORT || 1337;
var db = require("./models");

var app = express();

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "wanderstuff", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var routes = require("./controllers/controller.js");

app.use(routes);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("listening on: http://localhost:" + PORT);
  });
});