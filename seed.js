require('dotenv').config()
require('./config/database');

const Plant = require('./models/plant')

const data = require('./data')

const p1 = Plant.deleteMany({})

Promise.all([p1])
    .then(function(plants) {
        console.log(plants)
        return Promise.all([
            Plant.findOne({name: ''})
        ])
    })
    .then(function(results) {
        console.log(results)
        process.exit()
    })
