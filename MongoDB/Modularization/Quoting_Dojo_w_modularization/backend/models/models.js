const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotesdb', { useNewUrlParser: true });
var QuoteSchema = new mongoose.Schema({
    user: String,
    name: String,
    created_at: { type: Date, required: true, default: Date.now },
}, {
    versionKey: false // You should be aware of the outcome after set to false
    }, { timestamps: true });

mongoose.model('Quotes', QuoteSchema);
const Quotes = mongoose.model('Quotes');

module.exports = { Quotes,}