const mongoose = require('mongoose');
const CONFIG = require('../config');
require('./addemp.model');
require('./seperated.model');
require('./AddHolidays.model')


const option={
  user:CONFIG.USER,
  pass:CONFIG.PASS,
  authSource:CONFIG.AUTH
}

mongoose.connect(CONFIG.DBURL,{ useNewUrlParser: true });
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection Error; connection failed'))//event Handler
db.once('open',()=>{
  console.log("mongoose Connection Successful");
})
