var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/list");
  });

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });
//post route hopefully to api/lists
  //TODO: this might not work
  app.post("/api/lists", function(req, res) {
    console.log(req.body);
    db.List.create({
      item: req.body.value1,
      quantity: req.body.value2,
      packed: req.body.value4
    }).then(function() {
      res.redirect(307, "/api/lists");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  // GET route for getting all the lists
  app.get("/api/lists/", function(req, res) {
    db.Post.findAll({where: {email: req.params.email}})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting list items
  //not sure if ID will work
  app.delete("/api/lists/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

//GET route logout
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

//this is for reference?
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
