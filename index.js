var app = require('express')();
let server = require('http').Server(app)
let io = require('socket.io')(server);


// Set port for listening
app.set('port',(process.env.PORT || 5000));

// Defining test return
app.get('/hello', function(req, resp) {
  resp.send('<h1>Hello, World!</h1>');
});

// Define response for homepage
app.get('/', function(req, resp) {
  resp.sendFile(__dirname+'/index.html');
});

users = [];
io.on('connection', function(socket) {
  console.log('User has connected');
  for(let i=0; i<users.length; i++) {
    console.log(users);
    socket.emit('new-user', users[i]);
  }
  socket.on('disconnect', function() {
    console.log('Disconnect by client'); 
  });
  socket.on('got-a-text', function(msg) {
    console.log('Messgae: ' + msg);
    io.emit('got-a-text', msg);
  });
  socket.on('new-user', function(msg) {
    console.log('New Nick: ' + msg);
    io.emit('new-user', msg);
    users.push(msg);
  });
});

server.listen(app.get('port'), function() {
  console.log('Created a server at port 5000');
});


 //Start listening of specified code
//app.listen(2000, function() {
  //console.log('listening on port: '+app.get('port'));
//});

