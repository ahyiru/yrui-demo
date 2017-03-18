
module.exports=function rest(app){
	//test1
	app.get('/test11',function(req,res){
		/*res.send({header:res.headers});
		res.send({body:res.body});
		res.send({route:res.route});*/
		// res.status(res.statusCode).send({statusCode:res.statusCode});
		res.send({test:'test1'});
	});

	//test2
	app.post('/test2',function(req,res){
		/*res.send({header:res.headers});
		res.send({body:res.body});
		res.send({route:res.route});*/
		res.status(res.statusCode).send({statusCode:res.statusCode});
	});
};










































