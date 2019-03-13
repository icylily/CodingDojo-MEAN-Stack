const my_controllers = require('../controller/controllers');
module.exports = (app) => {
    app
        .get('/api/tasks', my_controllers.getAllTasks)
        .get('/api/tasks/:id', my_controllers.getOneTask)
        .post('/api/tasks', my_controllers.createTask)
        .put('/api/tasks/:id', my_controllers.updateTask)
        .delete('/api/tasks/:id', my_controllers.deleteTask)
}