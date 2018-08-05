require('./app/models/db.connection')
const express=require('express');
const path=require('path');
const routes = require('./routes/router');
const bodyParser = require('body-parser');
var app=express();
app.set('port',7000);
app.set('host','127.0.0.1');
app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use('/api', routes);

app.listen(app.get('port'), app.get('host'),function () {
  console.log('Server started on port number :'+app.get('port'));
});