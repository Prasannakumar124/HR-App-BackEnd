const mongoose = require('mongoose');
var HolidaysSchema=mongoose.Schema({
    occasion:String,
    Date:String,
    Day:String,
    Location:String,
    Restricted:String
})
mongoose.model("Holidays",HolidaysSchema,"AddHolidays")