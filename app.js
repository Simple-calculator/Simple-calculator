
var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var http=require('http');
var server=http.createServer(app);

//initialize required modules for the app
var bodyParser=require('body-parser');
var morgan=require('morgan');
var mongoose=require('mongoose');
var mongodb=require('mongodb');
var path=require('path')
var bodyParser   = require('body-parser');
var session=require('express-session');
var methodOverride = require('method-override');  
//var MongoClient = mongodb.MongoClient;
var Activity=require('./models/activity');
//connect to mongo database
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
//use required modules
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride());
app.set('view engine', 'html');


// Page.
app.get('/calc', function(req, res){
    res.sendFile('calc.html', {'root' : 'views'});
});

//send activity to frontend
app.get('/api/activity', function(req, res){
  Activity.find({}, function(err, activity){
    if(err)
      res.send(err)
    res.json(activity)
 });
});


 


       
 //insert values into mongo db
    app.post('/insert', function(req, res){
        Activity.create({
             num1 : req.body.num1,
             num2 : req.body.num2,
             rest : req.body.rest,
             activity:req.body.activity
            },
            function(err, activity){
           if(err)
              res.send(err)

           Activity.find({}, function(err, activity){
              if(err)
                  res.send(err);

              res.redirect('calc.html');
           });
        });
    });

app.listen(port);
console.log('Server running on localhost: port ' + port);



