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


mongoose.connect("mongodb://gonzalowtf:aereomodelismo12@ds061767.mongolab.com:61767/conv", function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});


io.sockets.on('connection' ,function(socket){
	socket.on('sendMessenge', function(data){
		io.sockets.emit('newMessenge',{usrr:data.usr,msgg:data.msg});
		 
	});
	socket.on("new-m",function(data){

		if(data.vas){

			console.log("data recived");
			nombre = data.name
			mail = data.mail
			numero = data.number
		}
		else{
			console.log("not recived");
		}


	});
});

var nodemailer = require('nodemailer');     //sending mail
 var transporter =nodemailer.createTransport({   //SMTP',
        service : 'Gmail',
        auth:{
              user: 'gonzalowtf@gmail.com',
              pass: 'aereomodelismo12'

              }
 }); 
 //var v = '<strong>hi</strong>';
 //v=v+'<img src= "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2lHr02wc7xuBx9miriHXSKQLbIo7yzlJmZRxn6itXpFHOQOq-NWPsEFk">'  
 
 
 app.get('/contact2',function(req,res){
        var mailOptions = {
            from:'nikovfc.com',
            to:'gonzalowtf@gmail.com',
            subject: 'Mensaje de contacto <gustavojordan.com>',
            html : '<b><strong>'+nombre+' , mail :'+mail+'</b></strong><br><br><br> escribió en tu pagina y quiere contactarse con vos:<br><br> <br><br><br><br> numero  :'+numero            

            


     }


    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
      });

//console.log(nombre);

});
