function register(chatcontent){

		
		console.log(chatcontent);
		seedData= [{

			 id:1,
			 chat:chatcontent
		}];

		


//https://api.mongolab.com/api/1/databases/cars/collections/users?apiKey=_vLDq9lvUO9ci-RsLIyj5McCzMxnI2uO

		$.ajax( { url: "https://api.mongolab.com/api/1/databases/conv/collections/conv?apiKey=_vLDq9lvUO9ci-RsLIyj5McCzMxnI2uO&q={'key':1234}",
		  data: JSON.stringify(  {"$set": {"chat":chatcontent} } ),
		  type: "PUT",
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