require('../models/db.connection')
 const mongoose = require('mongoose');
 const add = mongoose.model('Addemployee');
 const objectId = require('mongodb').ObjectId;

 //       ----------------------Inserting Employee Data-----------------

                      module.exports.addingemployee=(req,res)=>{
                      var data=new add(req.body)
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

//               -------------Update Employee---------------------

                        module.exports.updateEmployee= (req, res) => {
                      var EmpNo = req.params.empno;
                      console.log(req.params.empno)
                      add
                      .findOneAndUpdate(
                    {"EmployeeNo":EmpNo},{$set:req.body },function (err,resp){
                        res.status(200)
                        .json(resp)
                      })    
                      }

//            ---------------Employee Details----------------

                      module.exports.QuickEmployeeinfo= (req, res) => {
                        add
                        .find({},
                          {
                            "Name":1,
                            "_id":0,
                            "EmployeeNo":1,
                            "MobileNumber":1,
                            "Email":1,
                            "FatherName":1,
                            "Salary":1,
                            "REMARKS.remarks":1,
                            "Present.Address":1,
                            "Present.City":1
                          },
                          function (err,resp){
                            if (err) {res.json(err)}
                          res.status(200)
                          .json(resp)
                        })
                      };


//      ----Extend prohibation period-------

module.exports.Extendprohibationperiod=(req,res) =>{
  var EmpNo = req.params.empno;
  add
  .findOneAndUpdate(
{"EmployeeNo":EmpNo},{$set:req.body },function (err,resp){
    res.status(200)
    .json(resp)
  })
  };

module.exports.updateEmployeeBankdetails=(req,res) =>{
  var EmpNo = req.params.empno;
  add
  .findOneAndUpdate(
{"EmployeeNo":EmpNo},{$set:req.body },function (err,resp){
    res.status(200)
    .json(resp)
  })
  };

//---------------------------Get One employye data-------------------------------------

module.exports.getspecifiedemp=(req,res)=>{
  console.log(req.params.empno)
  let empNumber= req.params.empno;
  add
  .find({"EmployeeNo":empNumber},function (err,doc){
    res
    .status(200)
    .json(doc);})
};
//-------------------------Get All Employee Data-------------------------------------

module.exports.getAllemployees = (req, res) =>{
                add
                .find()
                .exec((err,doc) => {
                  res
                  .status(200)
                  .json(doc)
                })
              }
