const mongoose = require('mongoose');
var SeparatedEmployee=mongoose.Schema(
    {
        "EmployeeNo": String,
        
        "ResignationSubmittedOn":String,
        "ReasonForLeaving":{type:String,required: true},
        "NoticePeriod":Number,
        "TentativeLeavingDate":String,
         "Remarks" :String,
        //Exit details
        "InterviewDate":String,
        "Notes":String,
        "LeavingDate":String,
        "SettledOn":String,
          "Employee has left organization":Boolean,
         "Notice Served":Boolean,
         "Fit to be rehired":Boolean
         });
mongoose.model("SeparatedEmp",SeparatedEmployee,"SeparatedEmplist")