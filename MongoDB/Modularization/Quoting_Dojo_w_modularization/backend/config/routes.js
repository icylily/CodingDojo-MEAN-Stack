
const my_controllers= require('../controllers/controller')

module.exports =  function(app){
    app.get('/', function (req, res) {
        my_controllers.index(req, res);
        // res.render('index');
    })
    app.get('/quotes', function (req, res) {
        my_controllers.show_all(req,res);
        // Quotes.find({}, function (err, quotes) {
        //     if (err)
        //         console.log("Error matching DB request")
        //     else
        //         res.render('quotes', { info: quotes, moment: moment });
        // });
    })

    app.post('/quotes', function (req, res) {
        my_controllers.post_a_quote(req,res);
    })   
}      
