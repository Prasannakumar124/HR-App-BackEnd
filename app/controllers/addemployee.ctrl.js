require('../models/db.connection')
 const mongoose = require('mongoose');
 const add = mongoose.model('Addemployee');
 const SeparatedEmp=mongoose.model('SeparatedEmp');
 const objectId = require('mongodb').ObjectId;

 //----------------------ADD Employee Data-----------------

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

//-------------Update Employee---------------------

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

//            --------------- Employee Details----------------

                      module.exports.QuickEmployeeinfo= (req, res) => {
                        add
                        .find({"CompanyStatus": "active"},
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

  // update Bank details
module.exports.updateEmployeeBankdetails=(req,res) =>{
  var EmpNo = req.params.empno;
  add
  .findOneAndUpdate(
{"EmployeeNo":EmpNo},{$set:req.body },function (err,resp){
    res.status(200)
    .json(resp)
  })
  };

//---------------------------Get One employee Details-------------------------------------

module.exports.getspecifiedemp=(req,res)=>{
  console.log(req.params.empno)
  let empNumber= req.params.empno;
  add
  .find({"EmployeeNo":empNumber},function (err,doc){
    if(err){
      res.json(err)
      return res;
    }
    // res
    // .status(200)
    // .json(doc)
    
    if(doc[0].EmployeeNo===empNumber){
     SeparatedEmp.findById(doc[0].ResignationDetails._id,function(error,result){
        res.json(result)
      })}
     })
    }
//-------------------------Get All Employee Details-------------------------------------

module.exports.getAllemployees = (req, res) =>{
                add
                .find()
                .exec((err,doc) => {
                  res
                  .status(200)
                  .json(doc)
                })
              }

//---------------------Conformation-------------------------
module.exports.confirmemp=(req,res)=>{
  var EmpNo = req.params.empno;
  add
  .find({"EmployeeNo":EmpNo},function (err,doc){
   if(doc[0].Status!="confirmed"){
     add.findOneAndUpdate({"EmployeeNo":EmpNo},{$set:{"Status":"confirmed"}}, function(err,data){
      if (err) { throw err; }
      else { res.json({"Message":"Employee confirmed"}) }
     })
   }else{
     res.json({"Message":"Employee is already confirmed"})
   }

  })}
  