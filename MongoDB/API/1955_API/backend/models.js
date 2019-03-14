var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/namedb', { useNewUrlParser: true });

const NameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,

    },
    
}, { versionKey: false }, { timestamps: true });

module.exports = mongoose.model('Name', NameSchema);