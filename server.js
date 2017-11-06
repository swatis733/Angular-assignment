require('/home/user/Attendanceapp/model/models.js');
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
mongoose.Promise = require('bluebird');   // To remove deprecation warning node 6676
var cors = require('cors'); // To allow Cross-Origin Restrictions

mongoose.connect('mongodb://localhost:27017/attendancesheet', { useMongoClient: true });

var app = module.exports = express();


var NODE_ENV = 'development';
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


routes = require('/home/user/Attendanceapp/routes/routes.js');
app.use('/api', routes);

var port = process.env.PORT || 4600;

app.listen(port);

console.log('Server starts on port ' + port);