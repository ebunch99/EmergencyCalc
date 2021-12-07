var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/', function(req, res, next) {
    console.log("Here");
    res.render('index-form');
  });

  //All of this is what is causing the problems. As said in the index-form, if this is moved into the get above then 
  //it will insert undefined into the databae upon logging in, but trying to use it in the form as intended will give a 404 error.
router.post('/index', function (req, res, next, data) {
  console.log(req.body.calculationsave);
    var sql = `INSERT INTO calculations (userid,calculation,graphfunction) VALUES ('${req.session.userid}','${req.body.calc}','${req.body.graphfunc}')`;
    db.query(sql,function (err, data) {
        if (err) throw err;});
        var msg = "Calculation has been saved";
    
        res.render('index-form',{alertMsg:msg});
});

module.exports = router;