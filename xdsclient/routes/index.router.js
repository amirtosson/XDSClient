const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');
//var auth = require('../src/app/app-routing.module').ensureAuthenticated; 
const jwtHelper = require('../config/jwtHelper');

router.post('/test', ctrlUser.Test);
router.post('/home', ctrlUser.Home);
router.get('/getnews', ctrlUser.GetNews);
router.get('/login', ctrlUser.Login);
module.exports = router;
//module.exports.x = () => { 
  //  return 5;
//};
