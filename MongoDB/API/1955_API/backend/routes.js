const my_controllers = require('./controllers');
module.exports = (app) => {
    app
        .get('/', my_controllers.getAllNames)
        .get('/new/:name/', my_controllers.createName)
        .get('/remove/:name/', my_controllers.deleteName)
        .get('/:name',my_controllers.getOneName)
}