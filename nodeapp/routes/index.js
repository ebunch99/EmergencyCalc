/*var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/

var express = require('express');
var router = express.Router();
var db = require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table

router.get('/', function (req, res, next) {
    if(req.session.loggedinUser) {
        var sql = `SELECT calculationid,userid,calculation,graphfunction FROM calculations WHERE userid=?`;

        console.log(req.session);
        db.query(sql, [req.session.userid], function (err, data, fields) {
            //req.session.calculation = data[0].calculation;
            //console.log(req.session.calculation);
            if (err) throw err;
                res.render('index', { title: 'index', userData: data });
        });
    }
    else{
        res.render('index',{title:'index'});
    }
    
});
module.exports = router;
