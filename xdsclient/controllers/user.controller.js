//var passport = require('passport');
var request = require('request');
var mysql = require('mysql');
const path = require('path');
const fs = require('fs');
const token = require('../config/jwtHelper')
const pythonServer = require('../python_server_controllers/python-main.controller')



var db_config = {
    host: "localhost",
    port:"3306",
    user: "root",
    password: "26472647",
    database: "xdsdb"
  };

var con;

function handleDisconnect() {
    con = mysql.createConnection(db_config);
                                               

    con.connect(function(err) 
    {            
        if(err) {                                  
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); 
        }                                     
    });                                     
    con.on('error', function(err) 
    {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
            handleDisconnect();                        
        } else {                                      
            throw err;                                 
        }
    });
}

handleDisconnect();



function GetNews (req,res){ 
    try {
        con.query("SELECT * FROM news", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
        });
    } catch (error) { 
        res.json("Something Wrong");
    }
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
    try {
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
                    "user_id": result[0].id,
                    "first_name": result[0].firstname,
                    "last_name":result[0].lastname,
                    "user_token": token.GenerateNewToken(req.body)           
                }
            );
        }
    });
    } catch (error) { 
        res.json("Something Wrong");
    }
}



async function Home (req,res){ 
    //request.post('http://127.0.0.1:5000/pythonTest/'+req.body.data_id)

    // let a =  request.post(
    //     'http://127.0.0.1:5000/pythonTest/'+req.body.data_id,
    //     async function (error, res, body) {
    //         if (!error && res.statusCode == 200) {
    //             console.log(body);
    //             return res.json("H");
    //         }   
    //     }
    // );
    //t = await  pythonServer.Test(1)
    //console.log('from amin '+t)

    pythonServer.functionOne(1).then( res4 =>
        {
            return res.json({
                "status": 200,
                "data":res4
            }
                )
        }
        
    )   
}

function UploadSingleFile(req,res, next)
{
    const file = req.file;
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
    const name_parts = file.originalname.split('_')
    
    var query = "INSERT INTO datasets(owner_id,Method_name , dataset_name, rad_facility, added_date, sample, summery) VALUES("
    + name_parts[1] +  ","
    + "\""+name_parts[2]+  "\""+ ","
    + "\"" +name_parts[3]+ "\""+ "," 
    + "\"" +name_parts[4]+ "\""
    + ",now(),"
    + "\"" +name_parts[5]+ "\""+ "," 
    + "\"" +name_parts[6]+ "\""+");" 

    try {
        con.query(query, function (err, result, fields) {
    });
    } catch (e) { 
        console.log(e)
        res.json("Something Wrong");
        return res.status(400);
    }
    res.send(file);
    return res.status(200);
}


module.exports = { GetNews, Login, Home, GetUserActivities, GetFilesList, GetUserDatasetsMetadata, UploadSingleFile};
