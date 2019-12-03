let db = require("../models");

module.exports = function (app) {

    app.get("/api/products", function (req, res) {
        db.Product.findAll({})
            .then(function (dbProduct) {
                res.json(dbProduct);
            });
    });

    app.get("/api/products/:id", function(req, res) {
        db.Product.findOne({
          where: {
            id: req.params.id
          }
        }).then(function(dbProduct) {
          res.json(dbProduct);
        });
      });

    app.post("/api/products", function (req, res) {
        db.Product.create(req.body)
            .then(function (dbProduct){ 
                res.json(dbProduct);
            });
    });

}