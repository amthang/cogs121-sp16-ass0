var models = require("../models");

exports.view = function(req, res) {
    // var data = {data: []};
    // res.render("index", data);

    models.message.find(findFunction);

    function findFunction(err, info){
    	if(err){
      		console.log(err);
      		res.send(err);
    	}
    	res.render("index", {data: info});
    };
}
