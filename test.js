var http = require('http');

var server = http.createServer(function(req,resp) {
  resp.writeHead(200,{'content-type': 'text/plain'});
  resp.end("Hello, World\n");
});

var cp = require('child_process');
var ls = cp.spawn('pwd');

ls.stdout.on('data', function(data) {
  console.log(data);
});
ls.on('exit', function(code) {
  console.log('child process exited with code '+code);
});

//server.listen(4000);
//console.log('Server initialized at Port: 4000\n');
