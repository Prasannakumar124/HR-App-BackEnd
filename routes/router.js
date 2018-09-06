const express = require('express');
const path = require('path');
const router = express.Router();
const addemplyctrl=require('../app/controllers/addemployee.ctrl');
const SeparatedEmplist=require('../app/controllers/SeparatedEmplist.ctrl')
const AddHolidays=require('../app/controllers/AddHolidays.ctrl')
const Leave=require('../app/controllers/Leave.ctrl')

             /* ************addemployee.ctrl.js*********** */

//----------------ADD Employee -----------------------------

        router
        .route('/basicinfo')
        .post(addemplyctrl.addingemployee)

        //------------get employee Deyails-------------------------------------
        router
        .route('/basicinfo/:empno')
        .get(addemplyctrl.getspecifiedemp)
        router
        .route('/getAllemployees')
        .get(addemplyctrl.getAllemployees)

        //------------------update employee Deatils----------------------------
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

        //---------------- confirm Employee
        router
            .route('/confirmemp/:empno')
            .put(addemplyctrl.confirmemp)


            /*             ************SeparatedEmplist.ctrl.js*********** */

        //----------------empseperation
            router
            .route('/Empseperation/:empno')
            .post(SeparatedEmplist.Empseperation)

        //-------------Deleted Employee list 
        router
        .route('/DeletedEmployeeList/:empno')
        .post(SeparatedEmplist.DeletedEmployeeDetails)

        //-------UpdatesResignationDetails
        router
        .route('/UpdatesResignationDetails/:empno')
        .patch(SeparatedEmplist.UpdateResignationDetails)


            /*             ************AddHolidays.ctrl.js************/

        //------------adding Details
        router
        .route('/AddHoliday')
        .post(AddHolidays.AddingHolidays)

        //------------modifying Holiday Details
        router
        .route('/modifyingholiday/:id')
        .patch(AddHolidays.modifyingHoliday)

        //-------------Get Holiday List
        router
        .route('/holidaylist')
        .get(AddHolidays.HolidayList)

        //-----------Delete Holiday
        router
        .route('/DeleteHoliday/:id')
        .get(AddHolidays.DeletHoliday)

        /*             ************Leave.ctrl.js************/
        
        //-------------Requesting A Leave
        router
        .route('/RequestLeave')
        .post(Leave.RequestLeave)

        //-------Granting A Leave
        router
        .route('/grantleave/:id')
        .patch(Leave.modifyingLeave)

        //------- View Leave History

        router
        .route('/Leavelist')
        .get(Leave.LeaveList)

        //----------Delete Leave
        router
        .route('/DeleteLeave/:id')
        .get(Leave.DeleteLeave)




    
module.exports = router
      