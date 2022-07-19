
// var mysql = require('mysql');

// var db_config = {
//     host: "localhost",
//     port:"3306",
//     user: "root",
//     password: "26472647",
//     database: "xdsdb"
//   };

// var con;

// function handleDisconnect() {
//     con = mysql.createConnection(db_config);
                                               

//     con.connect(function(err) 
//     {            
//         if(err) {                                  
//             console.log('error when connecting to db:', err);
//             setTimeout(handleDisconnect, 2000); 
//         }                                     
//     });                                     
//     con.on('error', function(err) 
//     {
//         console.log('db error', err);
//         if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
//             handleDisconnect();                        
//         } else {                                      
//             throw err;                                 
//         }
//     });
// }

// handleDisconnect();

software = {software:[
            {id:1,
            name: '1D Auto Encoder',
            logo_path:'ae.png',
            method:'XPCS',
            desc:'To denoise a 1D correlation function',
            doi:"11dautoencoderxpcs"},
            
            {id:2,
            name: 'Raw Data Manipulation',
            logo_path:'rd.png',
            method:'XPCS',
            desc:'To manipulate raw data',
            doi:"2rawdatamanipulationxpcs"}
        ]
        }

function AvailableSoftware (req,res){ 
    try {
        res.json(software);
        
    } catch (error) { 
        res.json("Something Wrong");
    }
}



module.exports = {AvailableSoftware};
