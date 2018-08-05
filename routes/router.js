const express = require('express');
const path = require('path');
const router = express.Router();
const addemplyctrl=require('../app/controllers/addemployee.ctrl');

//             ************addemployee.ctrl.js************


//----------------ADD NEW Employee DATA-----------------------------

router
.route('/basicinfo')
.post(addemplyctrl.addingemployee)

//------------get employee data-------------------------------------
router
.route('/basicinfo/:empno')
.get(addemplyctrl.getspecifiedemp)
router
.route('/getAllemployees')
.get(addemplyctrl.getAllemployees)

//------------------update employee Data----------------------------
router
.route('/basicinfo/:empno')
.patch(addemplyctrl.updateEmployee)

//------ ------------Employee Details ----------------------
router
.route('/employeedetails')
.get(addemplyctrl.QuickEmployeeinfo)

//------- Update employee Bank Details-----------------
router
.route('/updateEmployeeBankdetails/:empno')
.patch(addemplyctrl.updateEmployeeBankdetails)

//------- Update employee Prohibation Period-----------------
router
.route('/updateprohibationperiod/:empno')
.put(addemplyctrl.Extendprohibationperiod)

module.exports = router
      