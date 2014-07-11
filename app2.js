var app = require('http').createServer(handler);
//  , io = require('socket.io').listen(app)
//  , fs = require('fs')
//  , url = require('url')

app.listen(process.env.PORT || 8000);


function handler (req, res) {

        var path = req.url;
  console.log("requested=" + path + " counter=" + counter);

  res.writeHead(200, {'Content-Type': 'text/html'}); // prepare response headers

  if (path == "/") {
    res.end("Hello World. I am the requestor edit # " + counter + ".<br><a href='/page2'>Page 2</a>\n");

  } else if (path == "/page2") {
    res.end("This is page 2. <a href='/'>Here.</a>\n"); // send response and close connection 
  }
}
