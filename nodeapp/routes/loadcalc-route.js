var express = require('express');
var router = express.Router();
var db = require('../database');


router.get('/loadcalc', function (req, res, next) {
    if(req.session.loggedinUser) {
        var sql = `SELECT calculationid,userid,calculation,graphfunction FROM calculations WHERE userid=?`;

        console.log(req.session);
        db.query(sql, [req.session.userid,req.session.username], function (err, data, fields) {
            //req.session.calculation = data[0].calculation;
            //console.log(req.session.calculation);
            if (err) throw err;
                res.render('load-calc', { title: 'loadcalc', userData: data});
        });
    }
    else{
        res.render('load-calc',{title:'loadcalc',userData:null});
    }
    
});
module.exports = router;