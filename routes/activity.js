//Schema for activity
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
//Create a Schema model to hold your activity data.
var activitySchema = new Schema({
    number1:Number,
    number2:Number,
    activity : String,
    results:Number
    //timestamp_minute: true
});
 var Activity = mongoose.model('Activity', activitySchema);
 module.exports = Activity;
 
    