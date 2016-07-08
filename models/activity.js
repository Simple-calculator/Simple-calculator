//Schema for activity
var mongoose=require('mongoose');
//var Schema=mongoose.Schema;
//Create a Schema model to hold your activity data.
//var timestamps = require('mongoose-timestamp');
var activitySchema = mongoose.Schema({
    num1:Number,
    num2:Number,
    rest:Number,
    activity:String,
    time : { type : Date, default: Date.now }
});
 module.exports =mongoose.model('Activity', activitySchema);
