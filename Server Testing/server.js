const http = require('http');
var fs = require('fs');
var Connection = require('tedious').Connection;
const sql = require('mssql');

const config = {  //localhost
    server: 'localhost',  
    authentication: {
        type: 'default',
        options: {
            userName: 'ebunchCSCI4805', 
            password: 'CSCI4805abc'  
        }
    },
    options: {

        encrypt: true,
        database: 'ebunchCSCI4805'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();

var Request = new Connection(config);
var TYPES = require('tedious').TYPES;

/*function executeStatement1() {  
    request = new Request("INSERT INTO Users(User_ID, Username, Password)VALUES ('0', 'Hammyattak','abcd')", function(err) {  
     if (err) {  
        console.log(err);}  
    });  
    request.addParameter('Name', TYPES.NVarChar,'SQL Server Express 2014');  
    request.addParameter('Number', TYPES.NVarChar , 'SQLEXPRESS2014');  
    request.addParameter('Cost', TYPES.Int, 11);  
    request.addParameter('Price', TYPES.Int,11);  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            console.log("Product id of inserted item is " + column.value);  
          }  
        });  
    });
*/
fs.readFile('./index.html', function (err, html){
	
    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
});



