//var passport = require('passport');
var mysql = require('mysql');



var con = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user: "root",
    password: "rock255",
    database: "xdsdb"
  });

function Test (req,res){ 

    var query = "SELECT * FROM xdsusers WHERE loginname = " + "\""+req.body.name + "\"" + 
                "AND password = " + "\""+req.body.password + "\""

        con.query(query, function (err, result, fields) {
        //if (err) throw err;
        if (result[0] === undefined ) {
            res.json(0);
        } else {
            res.json(result[0].id);
        }
        //res.json(result);
        
        });
}

function GetNews (req,res){ 
    con.query("SELECT * FROM news", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
    });
}

function Login (req,res){ 
    //console.log(req) 
    res.redirect('login');
    //res.sendFile("../dist/xdsclient/index.html");
}


module.exports = {Test, GetNews, Login};
