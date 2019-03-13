const my_controllers = require('../controllers/controller');
module.exports = function (app){
    app.get("/", function (req, res) {
        my_controllers.index(req, res);
    });
    app.get("/animals/new", function (req, res) {
        my_controllers.new_animal_page(req,res);
    });
    app.post("/animals/new", function (req, res) {
        my_controllers.create_a_animal(req,res);
    });

    app.get('/animals/:id', function (req, res) {
        my_controllers.show_a_animal(req,res);
    });

    app.get('/animals/edit/:id', function (req, res) {
        my_controllers.show_edit_page(req,res);
    });
    app.post('/animals/edit_process/:id', function (req, res) {
        my_controllers.edit_a_animal(req,res);
    });
    app.post('/animals/destroy/:id', function (req, res) {
        my_controllers.delete_a_animal(req,res);
    })


}









