var express = require('express');
var router = express.Router();
var db=require('../database');

// to display registration form 
router.get('/register', function(req, res, next) {
  res.render('registration-form');
});

// to store user input detail on post request
router.post('/register', function(req, res, next) {
    
    inputData ={
        username: req.body.username,
        password: req.body.password,
    }
// check unique email address
var sql='SELECT * FROM user WHERE username =?';
db.query(sql, [inputData.username] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.username+ "was already exist";
 }else{
     
    // save users data into database
    var sql = 'INSERT INTO user SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your are successfully registered";
 }
 res.render('registration-form',{alertMsg:msg});
})
     
});
module.exports = router;