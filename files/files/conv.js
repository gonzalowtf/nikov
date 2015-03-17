function register(){

		var chat = document.getElementByid("chat").innerHTML
		seedData= [{
			 _id:{
			 	$oid: "5508aa54e4b008505d2cdfad"
			 },
			 chat:chat
		}];

		console.log(seedData);


//https://api.mongolab.com/api/1/databases/cars/collections/users?apiKey=_vLDq9lvUO9ci-RsLIyj5McCzMxnI2uO

		$.ajax( { url: "https://api.mongolab.com/api/1/databases/conv/collections/conv?apiKey=_vLDq9lvUO9ci-RsLIyj5McCzMxnI2uO",
		  data: JSON.stringify( seedData ),
		  type: "POST",
		  contentType: "application/json" } ).success(function(data){
		  	if(data){
		  		console.log("chat registered");
		  		}
		  		else{
		  			console.log("could not load chat to database");
		  		}
		  }); 
      
     
         console.log("llego");  
     
        




}