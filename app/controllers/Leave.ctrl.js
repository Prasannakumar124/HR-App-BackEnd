require('../models/db.connection');
const mongoose= require('mongoose');
const Leave =mongoose.model('LeaveData');
const objectId=require('mongodb').ObjectId;

//---------Requesting A Leave

module.exports.RequestLeave=(req,res)=>{
    var data=new Leave(req.body)
    data.save((err,result)=>
    {
      if(err){
                res
                .json({"Message":"No data inserted"});
                console.log(err.stack);
              }
              res
              .status(200)
              .json(result);
    })
    }

//-------Granting A Leave

module.exports.modifyingLeave= (req, res) => {
    let LeaveId = req.params.id;
  Leave
  .findById(LeaveId ,(error,doc)=>{
    if(error){
        res
        .json(err);
        console.log(error.stack);
        return res;
      }
      console.log(doc.Status);
      if(doc.Status=="pending"){
      Leave
    .findByIdAndUpdate(LeaveId, {$set:{"Status": "Approved"}}, { new : true}, (err, resp) => {
        if (err) {
          console.log("Error : ", err.stack);
        }
      }
    )}
    res
        .status(200)
        .json({"status":"changes done"})
 
})}
 
//------- View Leave History

module.exports.LeaveList = (req, res) =>{
    Leave
    .find()
    .exec((err,doc) => {
      res
      .status(200)
      .json(doc)
    })
  }


//----------Delete Leave
module.exports.DeleteLeave= (req, res) => {
    let LeaveId = req.params.id;
Leave
  .findOneAndRemove(LeaveId,(err, resp) => {
      if (err) {
        console.log("Error : ", err.stack);
      }
      res
      .status(200)
      .json({"status":"Removed sucessfully"})
    }
  )}