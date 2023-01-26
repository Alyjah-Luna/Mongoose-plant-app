const Plant = require('../models/plant')

module.exports = {
    index,
    new: newPlant,
    show,
    create,
    update
}

function index(req, res) {
    Plant.find({}, function (err, plants) {
      res.render("plants/index", { title: "All Plants" })
    });
  }

function newPlant(req, res) {
    res.render('plants/new', { title: 'Add Plant'})
}

// function create(req, res) {
//     req.body.comment = !!req.body.comment;
//     for (let key in req.body) {
//       if (req.body[key] === "") delete req.body[key];
//     }
   
//     const plant = new Plant(req.body);
//     plant.save(function (err) {
//       if (err) return res.redirect("/plants/new");
//       console.log(plant);
//       res.redirect(`/plants/${plant._id}`);
//     });
//   }
function show(req, res) {
    Plant.findById(req.params.id, function (err, plant){
      console.log(plant)
      res.render("plants/show", { title: "Plant Detail", plant });
    })
};

function create(req, res) {
  const plant = new Plant(req.body)
  plant.save(function (err) {
    if (err) return res.redirect('/plants/new')
    res.redirect('/plants')
  })
}

function update(req, res, next) {
  const updatedPlant = {
      name: req.body.name,
      type: req.body.type,
      origin: req.body.origin,
      waterRequirement: req.body.waterRequirement,
      sunlightRequirement: req.body.sunlightRequirement,
      difficulty: req.body.difficulty
  }
  Plant.findByIdAndUpdate(req.params.id, updatedPlant, { new: true }, function (err, plant) {
      if (err) { return next(err); }
      res.redirect(`/plants/${plant._id}`);
  });

}