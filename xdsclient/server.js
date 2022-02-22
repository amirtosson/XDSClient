const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
//var mysql = require('mysql');

const port = process.env.PORT || 3000;
//const users = [];
//const indexRouter = require('./routes/index.router');

const app = express();
      
app.use(cors());
app.use(bodyparser.json());
//app.use(indexRouter);
app.use(express.static(process.cwd()+"/dist/xdsclient/"));

app.get('/', function (req, res) {
    res.send('hello world')
  })


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
