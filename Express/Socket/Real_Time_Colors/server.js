const express = require('express');
var bd = require('body-parser');
const app = express();
app.use(bd.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
var count = 0;

app.get('/', function (req, res) {

    res.render('index', { count: count });

});

const port = 6789;
const server = app.listen(port, function () {
    console.log("Start listen to port " + port);
})

const io = require('socket.io')(server);
var backgound_color = "";
io.on('connection', function (socket) {
    console.log("client connected");
    socket.emit('updateClient', { color: backgound_color });
    // socket.on('alpha', function (data) {
    //     // socket.emit will respond back to the socket client that triggered this 'alpha' listener
    //     socket.emit('updateClient', { count: count });
    // });
    socket.on('client_submit', function (data) {
        // io.emit will message all socket clients
        console.log("get client submit:" + data.color);

        backgound_color = data.color;
        console.log("now backgound_color is " + backgound_color);
        io.emit('updateClient', { color: backgound_color });
        
    });
 
});