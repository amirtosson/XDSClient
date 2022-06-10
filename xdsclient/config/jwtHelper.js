const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");
const base64url = require('base64url');

function verifyJwtToken(req, res, next){
    var token;
    console.log("verifying token");
    if('authorization' in req.headers)
    {
        token = req.headers['authorization'].split(' ')[1];
    }
    if(!token){
        console.log('No token provided');
    }
    else{
        jwt.verify(token,'JwtSecret',
            (err, decoder) => {
                if(err)
                {
                    console.log('jwthelper error', err);
                    return res.status(500).send({auth: false, message: 'Token failed to authenticate'});
                }
                else
                {
                    req._id = decoder._id;
                    console.log('jwthelper no error', req._id);
                    next();
                    console.log('jwt verified moved to next');
                }
            }
        )
    }
}

function GenerateNewToken(user){ 
      var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(user));
      return base64url(stringifiedData.toString());    
}

module.exports = {verifyJwtToken, GenerateNewToken}