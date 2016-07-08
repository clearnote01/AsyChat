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

io.on('connection', function(socket) {
  console.log('User has connected');
  socket.on('disconnect', function() {
    console.log('Disconnect by client'); 
  });
});

server.listen(app.get('port'), function() {
  console.log('Created a server at port 5000');
});


 //Start listening of specified code
//app.listen(2000, function() {
  //console.log('listening on port: '+app.get('port'));
//});

