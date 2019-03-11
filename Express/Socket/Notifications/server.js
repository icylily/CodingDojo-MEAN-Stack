// import all used model
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//inintial enveriment variable
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname+"/static"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');erserver = app.li

const port = 1234;
var server = app.listen(port,function(){
    console.log("start listening on "+port);
});

var io = require('socket.io').listen(server);
// var id = 0;
// var messages = {};
io.sockets.on('connection', function(socket){
    io.emit("client_conneted",{id:socket.id});
    socket.on("notify_everyone",function(){
        io.emit("triggered_notify",{id:socket.id})
    });
    socket.on("disconnect", function () {
        socket.broadcast.emit("user_disconnect", { id: socket.id })
    })

});


app.get('/', function (req, res) {
    res.render('index');
})