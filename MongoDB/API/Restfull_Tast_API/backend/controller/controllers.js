var Task = require('../models/models');

module.exports = {

    getAllTasks: (req, res) => {
        Task.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },

    getOneTask: (req, res) => {
        const ID = req.params.id;
        Task.find({ _id: ID })
        .then(data =>res.json(data))
        .catch(err => res.json(err))
    },


    createTask: (req, res) => {
        const DATA = req.body;
        Task.create(DATA)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },

    updateTask: (req, res) => {
        const DATA = req.body;
        const ID = req.params.id;
        Task.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, new: true })
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },

    deleteTask: (req, res) => {
        const ID = req.params.id;
        Task.findOneAndDelete({ _id: ID })
        .then(data => res.json(data))
        .catch(err => releaseEvents.json(err))
    }
}