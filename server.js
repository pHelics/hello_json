var express = require('express');
var app = express();

var jsonString = {"name" : "Victor Calancea",
					"vacation" : 
					{ "places" : ["20.87833, -156.68250", "-8.40952, 115.18892"] }
};

console.log(jsonString);

app.get('/', function(req, res){
  res.json(jsonString);
});

var port = process.env.PORT || 5000;
app.listen(port);