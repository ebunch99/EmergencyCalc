var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/', function(req, res, next) {
    res.render('index');
  });

router.post('/index', function (req, res, next) {
    var sql = `INSERT INTO calculations (userid,calculation,graphfunction) VALUES ('${req.session.userid}','${req.body.calculation}','${req.body.graphfunction}')`;
    db.query(sql,function (err, data) {
        if (err) throw err;});
        var msg = "Calculation has been saved";
    
        res.render('index',{alertMsg:msg});
});

module.exports = router;