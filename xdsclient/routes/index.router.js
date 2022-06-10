const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');
//var auth = require('../src/app/app-routing.module').ensureAuthenticated; 
const jwtHelper = require('../config/jwtHelper');
const multer = require('multer');

const PATH = '/media/tosson/SEAGATE/userscloud/user1';
let storage = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, PATH);
    },
    filename: (req, file, callBack) => {
      callBack(null, file.originalname)
    }
  });
const upload = multer({ storage: storage })


router.post('/home', ctrlUser.Home);
router.get('/getnews', ctrlUser.GetNews);
router.post('/login', ctrlUser.Login);
router.post('/userrecentactivities', ctrlUser.GetUserActivities);
router.post('/userdatasets', ctrlUser.GetFilesList);
router.post('/userdatasetsmetadata', ctrlUser.GetUserDatasetsMetadata);
router.post('/uploadfile',upload.single('file') , ctrlUser.UploadSingleFile);


module.exports = router;
//module.exports.x = () => { 
  //  return 5;
//};
