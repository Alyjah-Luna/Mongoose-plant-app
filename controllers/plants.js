const Plant = require('../models/plant')

module.exports = {
    index,
    new: newPlant,
    create,
}

function index(req, res) {
    res.render('plants/index', {
        
    })
}

function newPlant(req, res) {

}

function create(req, res) {
    
}

