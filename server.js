var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var config = require('./server/config/config');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
console.log(__dirname);




app.listen(port, function() {
    console.log('Listening on port ' + port);
});

mongoose.connect(keys.mongoUri);
mongoose.connection.once('open', function() {
    console.log('Connected to MongoDB at ' + keys.mongoUri);
});