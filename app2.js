var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , url = require('url')

app.listen(process.env.PORT || 8000);

function handler (req, res) {

  fs.readFile(__dirname + req.url,
        function (err, data) {
          if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
          }

          res.writeHead(200);
          res.end(data);
        });
}

io.sockets.on('connection', function (socket) {

  var c = { type : 'handshake', id : socket.id, clientId : clientId };
  socket.emit('transmit', JSON.stringify(c));
  socket.on('broadcast', function (data) {
    data = JSON.parse(data);
    socket.broadcast.emit('transmit', JSON.stringify(data));
  }

});
