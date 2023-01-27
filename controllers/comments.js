const Plant = require('../models/plant')

module.exports = {
    create,
    delete: deleteComment
}

function create(req, res) {
    Plant.findById(req.params.id, function(err, plant) {

        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        plant.comments.push(req.body)
        console.log(req.body)
        console.log(req.user._id)
        plant.save(function(err) {
            res.redirect(`/plants/${plant._id}`)
        })
    })
}

async function deleteComment(req, res, next) {
    try {
        const plant = await Plant.findOne({'comments._id': req.params.id})
        if (!plant) return res.redirect('/plants')
        plant.comments.remove(req.params.id)
        await plant.save()
        res.redirect(`/plants/${plant._id}`)
    } catch(err) {
        return next(err)
    }
}
