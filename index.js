var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('/public/index.html', {"root": __dirname});
});

app.get('/Control', function(req, res){
  res.sendFile('/public/control.html', {"root": __dirname});
});

io.on('connection', function(socket){
  
	socket.on('touchmove', function(e){
		io.emit('touchmove', e);
	})

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});