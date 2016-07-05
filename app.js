
var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var http=require('http');
var server=http.createServer(app);

//initialize required modules for the app
var bodyParser=require('body-parser');
var morgan=require('morgan');
//var mongoose=require('mongoose');
var mongodb=require('mongodb');

var path=require('path')
var bodyParser   = require('body-parser');
var session=require('express-session');
var methodOverride = require('method-override');  
//var MongoClient = mongodb.MongoClient;
var Activity=require('./routes/activity');
//connect to mongo database
var url = 'mongodb://localhost:27017/math';

//use required modules
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride());
app.set('view engine', 'html');

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/math');

// Page.
app.get('/', function(req, res){
    res.sendFile('calc.html', {'root' : 'views'});
});

//Return all the activities from the collection.
app.get('/activity', function(req, res){
  Activity.find({}, function(err, activity){
    if(err)
      res.send(err)
    res.json(activity)
 });
});


app.listen(port);
console.log('Server running on localhost: port ' + port);



