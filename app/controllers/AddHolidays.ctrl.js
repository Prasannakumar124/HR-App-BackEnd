require('../models/db.connection')
 const mongoose = require('mongoose');
 const add = mongoose.model('Addemployee');
 const SeparatedEmp=mongoose.model('SeparatedEmp');
 const Holiday=mongoose.model('Holidays');
 const objectId = require('mongodb').ObjectId;

 //-----------Adding Holidays

 module.exports.AddingHolidays=(req,res)=>{
    var ADD=new Holiday(req.body)
    ADD.save((err,result)=>
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

//------------modifying Holidays

module.exports.modifyingHoliday= (req, res) => {
    let holidayId = req.params.id;
  Holiday
  .findByIdAndUpdate(holidayId, req.body, { new : true}, (err, resp) => {
      if (err) {
        console.log("Error : ", err.stack);
      }
      res
      .status(200)
      .json({"status":"updated sucessfully"})
    }
  )}

//---------------Get HolidayList

module.exports.HolidayList = (req, res) =>{
    Holiday
    .find()
    .exec((err,doc) => {
      res
      .status(200)
      .json(doc)
    })
  }
