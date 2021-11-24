const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var mysql = require('mysql');

port = 3080;
const users = [];
const indexRouter = require('./routes/index.router');

const app = express();
      
app.use(cors());
app.use(bodyparser.json());
app.use(indexRouter);
app.use(express.static(process.cwd()+"/dist/xdsclient/"));




app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
