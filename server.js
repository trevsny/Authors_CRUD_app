const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/angAuthors/dist/angAuthors'));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angAuthors/dist/angAuthors/index.html"))
  }); //must be in server.js in order to manually navigate to urls
  
app.listen(8000, function(){console.log("listening on port 8000")});