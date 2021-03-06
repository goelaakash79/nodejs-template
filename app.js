const express =require('express');
const path = require('path');
const bodyParser = require('body-parser');

// DB Config
require('./config/dbconnection');

const app = express();
const .. = require('./routes/..');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/poll', poll);

const port = 3000 || process.env.PORT;
app.listen(port, function(){
  console.log("Server running at port" + port);
});
