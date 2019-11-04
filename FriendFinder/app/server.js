var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: false }));
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

//api routes
var api = require('../app/routing/apiRoutes');
api(app);


// app.post('/api/friends',urlencodedParser, function (req,res) {
//   res.end(JSON.stringify(req.body));
//   console.log(req.body);

// });
//html routes
var routes = require('../app/routing/htmlRoutes');
routes(app);


app.listen(PORT);