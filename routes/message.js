var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here

    var data = req.body;

    var message = new models.message({
    // 	"email": data["email"],
    // 	"content": data["content"],
  		// "created": data["created"]

  		"email": data.email,
  		"content": data.content,
  		"created": Date.now()
    });

    message.save(finalSave);

    function finalSave(err){
    	if(err) {
      		console.log(err);
      		res.send(err);
    	}

    	res.redirect("/");
	}
};