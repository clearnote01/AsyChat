let app = require('express')();

app.get('/',function(req,resp) {
  resp.send('<h1>Fire</h1>');
});

const port = 5000;
app.listen(port,function() {
  console.log('Listening at port ' + port.toString());
});

