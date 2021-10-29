var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login-form');
});

router.post('/login', function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    var sql='SELECT * FROM user WHERE username =? AND password =?';
    db.query(sql, [username, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.username= username;
            res.redirect('/dashboard');
        }else{
            res.render('login-form',{alertMsg:"Your Username or Password is incorrect"});
        }
    })

})

module.exports = router;