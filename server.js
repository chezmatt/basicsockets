var express = require("express");
var path = require("path");
var app = express();

var usrarray = [

];

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route t saro render the index.ejs view
app.get('/', function(req, res) {
    res.render("index");
});

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
// this is a new line we're adding AFTER our server listener
// take special note how we're passing the server
// variable. unless we have the server variable, this line will not work!!
var io = require('socket.io').listen(server);
// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function(socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  //all the socket code goes in here!
  // If you don't know where this code is supposed to go reread the above info
  socket.on("button_clicked", function(data) {
      console.log(data.username + ' clicked a button!  message: ' + data.message);
      io.emit('server_response', data);
  });

  socket.on("sendUser", function(data) {
      console.log(data.username + ' joined: ' + data.message);
      io.emit('server_response', data.message);
  });







});

// //  this is just the configuration code that we've already used
// io.sockets.on('connection', function (socket) {
//     //  EMIT:
//     socket.emit('my_emit_event');
//     //  BROADCAST:
//     socket.broadcast.emit("my_broadcast_event");
//     //  FULL BROADCAST:
//     io.emit("my_full_broadcast_event");
// })

//let io = require('socket.io').listen(server);

// io.sockets.on('connection', function (socket) {
//     console.log("Socket Running");
//     // Shows the socket id
//     console.log(socket.id);
//     socket.on("form_submit", function (data){
// 		// Shows posted data
//         console.log('Survey submitted with this data => ' + data.form_data);
//         socket.emit('return_form', {response: data.form_data});
//     })
// });
