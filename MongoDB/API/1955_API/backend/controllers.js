var Name = require('./models');

module.exports = {

    getAllNames: (req, res) => {
        Name.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    getOneName: (req, res) => {
        const NAME = req.params.name;
        Name.find({ name: NAME })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },


    createName: (req, res) => {
        const NAME = req.params.name;
        Name.create({name:NAME})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },


    deleteName: (req, res) => {
        const NAME = req.params.name;
        Name.findOneAndDelete({ name: NAME })
            .then(data => res.json(data))
            .catch(err => releaseEvents.json(err))
    }
}