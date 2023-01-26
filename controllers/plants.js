const Plant = require('../models/plant')

module.exports = {
    index,
    new: newPlant,
    create,
    show
}

function index(req, res) {
    Plant.find({}, function (err, plants) {
      res.render("plants/index", { title: "All Plants" })
    });
  }

function newPlant(req, res) {
    res.render('plants/new', { title: 'Add Plant'})
}

function create(req, res) {
    req.body.comment = !!req.body.comment;
    for (let key in req.body) {
      if (req.body[key] === "") delete req.body[key];
    }
   
    const plant = new Plant(req.body);
    plant.save(function (err) {
      if (err) return res.redirect("/plants/new");
      console.log(plant);
      res.redirect(`/plants/${plant._id}`);
    });
  }

function show(req, res) {
    Plant.findById(req.params.id)
        res.render("plants/show", { title: "Plant Detail" });
};

