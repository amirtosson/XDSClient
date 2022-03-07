//var passport = require('passport');
var mysql = require('mysql');
const path = require('path');
const fs = require('fs');



var con = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user: "root",
    password: "26472647",
    database: "xdsdb"
  });


function GetNews (req,res){ 
    con.query("SELECT * FROM news", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
    });
}

function GetFilesList (req,res){ 
    //var directoryPath = "/media/tosson/SEAGATE/userscloud/user" + req.body.user_id;
    var directoryPath = "/media/tosson/SEAGATE/userscloud/user1"
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        res.json(files)
    });
   
}

function GetUserDatasetsMetadata (req,res){   
    var query = "SELECT *, DATEDIFF(added_date, now()) as days FROM datasets WHERE owner_id = " + req.body.user_id;
    try {
        con.query(query, function (err, result, fields) {
        res.json(result);
        });
    } catch (error) { 
        res.json("Something Wrong");
    }
   
}

function GetUserActivities (req,res){ 
    var query = "SELECT * FROM act" + req.body.user_id;

    try {
        con.query(query, function (err, result, fields) {
        res.json(result);
        });
    } catch (error) { 
        res.json("Something Wrong");
    }
}

function Login (req,res)
{ 
    var query = "SELECT * FROM xdsusers WHERE loginname = " + "\""+req.body.user_name + "\"" + 
                "AND password = " + "\""+req.body.user_pwd + "\""

        con.query(query, function (err, result, fields) {
        if (result[0] === undefined ) {
            res.json(
                { 
                    "status": 404,
                    "user_id": 0  
                }
            );
        } else {
            res.json
            (
                { 
                    "status": 200,
                    "user_id": result[0].id  
                }
            );
        }
    });
}

function Home (req,res){ 
    return res.status(200).json("H");
}

module.exports = { GetNews, Login, Home, GetUserActivities, GetFilesList, GetUserDatasetsMetadata};
