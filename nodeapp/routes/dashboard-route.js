/*var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */
/*router.get('/dashboard', function(req, res, next) {
    //if(req.session.loggedinUser){
     //   res.render('dashboard',{email:req.session.username})
    db.query(sql, function (err, data, next) {
        var sql=`SELECT userid,username FROM user`;
    if (err) throw err;
    res.render('dashboard', { title: 'Dashboard', userData: data});
  });  
  module.exports = router;})
    //else{
      //  res.redirect('/login');
    //}*/

var express = require('express');
var router = express.Router();
var db = require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/dashboard', function (req, res, next) {
    if (req.session.loggedinUser) {
        var sql = `SELECT calculationid,userid,calculation,graphfunction FROM calculations WHERE userid=?`;

        console.log(req.session);
        db.query(sql, [req.session.userid], function (err, data, fields) {
            //req.session.calculation = data[0].calculation;
            //console.log(req.session.calculation);
            if (err) throw err;
            if (req.session.loggedinUser)
                res.render('dashboard', { title: 'Dashboard', userData: data });
        });
    }
});
module.exports = router;
