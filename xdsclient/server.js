const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config()
var mysql = require('mysql');

const port = process.env.PORT || 3000;

const PATH = '/media/tosson/SEAGATE/userscloud/user1';
let storage = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, PATH);
    },
    filename: (req, file, callBack) => {
      callBack(null, file.fieldname + '-' + Date.now())
    }
  });
const upload = multer({ storage: storage })
//const users = [];
const indexRouter = require('./routes/index.router');

const app = express();
      
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
  }));
app.use(indexRouter);

app.post('/uploadfile',upload.single('file'), (req, res, next) => {
  const file = req.file;
  console.log(file.filename);
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file);
  return res.status(200);
})
//app.use(express.static(process.cwd()+"/dist/xdsclient/"));

// app.get('/', function (req, res) {
//   res.status(200).json("H");
//   })

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
