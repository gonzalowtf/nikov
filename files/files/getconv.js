

chat = document.getElementById("chat");


$.get("https://api.mongolab.com/api/1/databases/conv/collections/conv?apiKey=_vLDq9lvUO9ci-RsLIyj5McCzMxnI2uO",function(data,status){

	console.log("data :"+data[0] + "   status:"+status);
	chat.innerHTML = data[0].chat;


});