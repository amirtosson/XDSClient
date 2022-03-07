const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');
//var auth = require('../src/app/app-routing.module').ensureAuthenticated; 
const jwtHelper = require('../config/jwtHelper');

router.post('/home', ctrlUser.Home);
router.get('/getnews', ctrlUser.GetNews);
router.post('/login', ctrlUser.Login);
router.post('/userrecentactivities', ctrlUser.GetUserActivities);
router.post('/userdatasets', ctrlUser.GetFilesList);
router.post('/userdatasetsmetadata', ctrlUser.GetUserDatasetsMetadata);


module.exports = router;
//module.exports.x = () => { 
  //  return 5;
//};
