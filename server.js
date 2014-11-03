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
	});

	socket.on('zoomToHotspot', function(){
		io.emit('zoomToHotspot');
	});

	socket.on('zoomToHotspot2', function(){
		io.emit('zoomToHotspot2');
	});

	socket.on('zoomToArial', function(){
		io.emit('zoomToArial');
	});

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});