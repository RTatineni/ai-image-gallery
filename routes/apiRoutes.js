var db = require("../models");

module.exports = function(app) {

  // STARTER CODE
  // ==============================================================

  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

  // ROUTES
  // ==============================================================

  // Get all image rankings
  app.get("/api/ranking", function(req, res) {
    db.Post.findAll({}).then(function(dbRanking) {
      res.json(dbRanking);
    });
  });

  // Create a new image ranking
  app.post("/api/ranking", function(req, res) {
    db.Post.create(req.body).then(function(dbRanking) {
      res.json(dbRanking);
    });
  });

  // Delete an image ranking by id
  app.delete("/api/ranking/:id", function(req, res) {
    db.Post.destroy({ where: { id: req.params.id } }).then(function(dbRanking) {
      res.json(dbRanking);
    });
  });

  // Increment image ranking
  app.post("/api/ranking", function(req, res){
    db.Post.increment('rank', {by: 1}).then(function(dbRanking){
      res.json(dbRanking);
    });
  });

  // Decrement image ranking
  app.post("/api/ranking", function(req, res){
    db.Post.decrement('rank', {by: 1} ).then(function(dbRanking){
      res.json(dbRanking);
    });
  });


};
