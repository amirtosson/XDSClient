var request = require('request');
const {spawn} = require('child_process');


async function Test(data_id)
  {

    var largeDataSet = [];
 // spawn new child process to call the python script
    const python = spawn('python', ['/home/tosson/Desktop/Projects/XDSClient/xdsclient/python_server_controllers/test.py']);
 // collect data from script
    python.stdout.on('data', function (data) {
    console.log('data ' + data);
    largeDataSet.push(data);});
    console.log('datas ' + largeDataSet)
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        });
    return largeDataSet;

    // z = await request.post(
    //          'http://127.0.0.1:5000/pythonTest/'+data_id,
    //           (error, res, body)  =>{
                 
    //                  console.log(body);
    //                  return body;
        
    //          }
    //      );
//     const response = await fetch
//     (
//         'http://127.0.0.1:5000/pythonTest/'+data_id, 
//       {
//         method:'POST',
//         headers: {
//             'Content-Type':'application/json', 
//             'Access-Control-Allow-Origin': '*'
//           }, 
// //body: JSON.stringify({'user_name':user_name, 'user_pwd':user_pwd })                  
//       }
//     );
//     const res = await response.json();
//     return res;
  }

  var resolvedFlag = true;
 function functionOne(data_id){
    return new Promise((data_ )=>{
        request.post('http://127.0.0.1:5000/pythonTest/'+ data_id,
                       (error, res, body)  =>{
                           if (res.statusCode ==200) {
                            data_(body); 
                           }
                     }
                );
    });
};

  module.exports = {Test, functionOne}
  