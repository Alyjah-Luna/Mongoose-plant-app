const Plant = require('../models/plant')

module.exports = {
    index,
    new: newPlant,
    create,
    show
}

function index(req, res) {
    res.render('plants/index', {
        
    })
}

function newPlant(req, res) {
    res.render('plants/new', { title: 'Add Plant'})
}

function create(req, res) {
    const plant = new Plant(req.body);
        plant.save(function (err) {
        if (err) return res.redirect('/plants/new');
        console.log(plant);
        res.redirect('/plants/new');
    });
};

function show(req, res) {
    Plant.findById(req.params.id)
    res.render('plants/show', { title: 'Plant Detail' })
}
