var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema ({
    email: { type : String, required: true , unique: true},
    name: {type: String},
    password: { type: String, required: true },
    role: {type: Number}
});

var attendanceSchema = new Schema ({
    email: { type : String  },
    date: { type: String }
   
});
var Login =mongoose.model('logindetail',loginSchema);
var Attendance= mongoose.model('attendance',attendanceSchema);
module.exports = Login , Attendance;