var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/list");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/list");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/list", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/list.html"));
  });
};
