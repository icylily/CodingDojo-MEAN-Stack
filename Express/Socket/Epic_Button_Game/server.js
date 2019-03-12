const express = require('express');
var bd = require('body-parser');
const app = express();
app.use(bd.urlencoded({extended:true}));
app.use(express.static(__dirname+"/static"));
app.set('views',__dirname+"/views");
app.set('view engine','ejs');
var count = 0;

app.get('/', function (req, res) {

    res.render('index',{count:count});

});

const port = 6789;
const server = app.listen(port,function(){
    console.log("Start listen to port "+port);
})

const io= require('socket.io')(server);

io.on('connection', function (socket) {
        
    socket.on('client_submit', function (data) {
        // io.emit will message all socket clients
        if (data.response ==1){
            count+=1;
            socket.emit('updateClient', { you: data.click_by_me });
            io.emit('updated_message', { count: count });
        }  
        else if(data.response ==2){
            count = 0;
            // socket.emit('updateClient', { you: data.click_by_me });
            io.emit('updated_message', { count: count, you: data.click_by_me });
        }
        
    });
    // socket.on('gamma', function (data) {
    //     // socket.broadcast will message all socket clients except the one that triggered the 'gamma' listener
    //     socket.broadcast.emit('updateAllExceptOne', { count: count });
    // });
});