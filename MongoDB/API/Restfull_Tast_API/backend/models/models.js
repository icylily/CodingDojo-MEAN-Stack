var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taskdb', { useNewUrlParser: true });

const TaskSchema = new mongoose.Schema({
    title: String,
    description: {
        type: String,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { versionKey: false },{ timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);

