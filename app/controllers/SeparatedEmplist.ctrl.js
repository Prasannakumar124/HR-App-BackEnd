require('../models/db.connection')
const mongoose = require('mongoose');
const add = mongoose.model('Addemployee');
const SeparatedEmp=mongoose.model('SeparatedEmp');

//-------------------Seperation of Employee---------------
module.exports.Empseperation=(req,res)=>{
    var EmpNo = req.params.empno;
    add
    .find({"EmployeeNo":EmpNo},function (err,doc){
      if(doc[0].CompanyStatus=="active"){        
        var data = new SeparatedEmp(req.body);
            data.save((err,result)=>
                      {
                        if(err){
                                  res
                                  .json(err);
                                  console.log(err.stack);
                                  return res;
                                }
                                add.findOneAndUpdate({"EmployeeNo":EmpNo},{$set:{"CompanyStatus": "inactive"}}, function(err,data){
                                  if (err) { 
                                    res
                                    .json({"Message":" something went wrong"});
                                    console.log(err.stack);
                                    return res;
                                  }
                                res
                                .status(200)
                                .json({"Message": "Data inseration sucessful in seperated employee list collection"});
                                return res;
                      })
                      
                     })
       }else{
        res.json({"Message":" This Employee is already removed"})
      }
   
     })}
    
     //--------------------Update ResignationDetails

module.exports.UpdateResignationDetails=(req,res)=>{
var EmpNo = req.params.empno;
SeparatedEmp.find({"EmployeeNo":EmpNo},function(error,resp){
    if(error){
      throw error;
    }
    add.findOneAndUpdate({"EmployeeNo":EmpNo},{$set:{"ResignationDetails":{"_id":resp[0]._id}}}, function(err,data){
      if (err) { 
        res
        .json({"Message":" something went wrong"});
        console.log(err.stack);
        return res;  
      }
      res.json({"status":"Updated Sucessfully"})
    })
  })}

 



  //--------------Deleted Employee details

     module.exports.DeletedEmployeeDetails=(req,res)=>{
                                
                                 var EmpNo = req.params.empno;
                                 add
                              .find({"EmployeeNo":EmpNo},function (err,doc){
                                if(doc[0].CompanyStatus=="active"){
                                  add.aggregate([{ $match : { "EmployeeNo" : EmpNo } },{
                                  $lookup:
                                  {
                                    from: "SeparatedEmp",
                                    localField: "EmployeeNo",
                                    foreignField: "EmployeeNo",
                                    as: "ResignationDetails"
                                  }
                                }])
                                }if(err){
                                  res.json(err);
                                }})} 
/*

                          
                        var element=[];
                            var EmpNo = req.params.empno;
                            add
                            .find({"EmployeeNo":EmpNo},function (err,doc){
                            
                              if(doc[0].CompanyStatus=="active")
                              {       
                              // for (let i = 0; i < doc.length; i++) {
                              //   const element = doc[i];
                          var data=SeparatedEmp(doc)
                          console.log(data);
                              // }
                        //       for(key in doc[0]){
                        //         element.push(Object.keys(doc[0])+":"+doc[0][key]);
                        //       }
                        // console.log(element);
                                    // data.save((err,result)=>
                                    //           {
                                    //             if(err){
                                    //                       res
                                    //                       .json(err);
                                    //                       return res;
                                    //                     }
                                    //                     res
                                    //                 .status(200)
                                    //                 .json(result);
                                    //                 return res; 
                                                        // SeparatedEmp.findOneAndUpdate({"EmployeeNo":EmpNo},{$set:req.body}, function(err,result){
                                    //                       if (err) { 
                                    //                                    res
                                    //                                   .json({"Message":" something went wrong"});
                                    //                                   }
                                    //                       else{
                                    //                             res
                                    //                             .json({"Message":" Data updated"});
                                    //                             return res;
                                    //                           }})
                                    //              add.findOneAndUpdate({"EmployeeNo":EmpNo},{$set:{"CompanyStatus": "inactive"}}, function(err,data){
                                    //             if (err) { 
                                    //                         res
                                    //                         .json({"Message":" something went wrong"});
                                    //                         return res;
                                    //                       }
                                                
                                                    
                                    //        })               
                                      //  })
                              }
                                else{
                                      res.json({"Message":" This Employee is already removed"})
                                    }
                            })*/
