// var mongoose = require('mongoose');
// var Quotes = mongoose.model('Quotes');
const { Quotes,} = require('../models/models')
const moment = require('moment');

module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    show_all: function (req, res) {
        Quotes.find({}, function (err, quotes) {
            if (err)
                console.log("Error matching DB request")
            else
                res.render('quotes', { info: quotes, moment: moment });
        });
    },
    post_a_quote: function (req, res) {
        console.log("post data: ", req.body);
        var quote = new Quotes({ user: req.body.user, name: req.body.name });
        quote.save(function (err) {
            // if there is an error console.log that something went wrong!
            if (err) {
                console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a quote!');
            }
            res.redirect('/quotes');
        });
    }
};