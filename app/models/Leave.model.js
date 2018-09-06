const mongoose = require('mongoose');
var LeaveSchema=mongoose.Schema({
   EmpNo:String,
   LeaveReason:String,
   LeaveType:String,
   EmpName:String,
   Department:String,
   FromDate:String,
   ToDate:String,
   Description:String,
   Status:String
})
mongoose.model("LeaveData",LeaveSchema,"Leave")