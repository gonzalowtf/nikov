var express = require("express"),
	app = express(),
	http = require("http"),
	server = http.createServer(app),
	port = process.env.PORT || 3000,
	mongoose = require("mongoose"),
	io= require("socket.io").listen(server);


app.configure(function () {
  app.use(express.bodyParser()); 
  app.use(express.methodOverride());
  app.use(app.router); 
});

app.get('/', function(req, res) {
          //console.log(req.url);  actual direction
     
          res.sendfile(__dirname + '/index.html');  
          //res.end("hello world!");    
      
      });

app.use('/files/files', express.static(__dirname + '/files/files'));

server.listen(port,function(err){
	if(err){
		console.log("could not start server");
	}
	else{
		console.log("server running at localhost:3000 or online port");
	}
});	


