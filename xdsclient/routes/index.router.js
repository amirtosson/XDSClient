const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');

router.post('/test', ctrlUser.Test);
router.get('/getnews', ctrlUser.GetNews);
router.get('/login', ctrlUser.Login);
module.exports = router;
//module.exports.x = () => { 
  //  return 5;
//};
