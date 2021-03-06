const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


require('dotenv').config();
require('./config/database.js');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

//This "statics" the build folder so that Express knows what folder to serve
app.use(express.static(path.join(__dirname, 'build')));

//check for token and create req.user (no path becuase it will run in every path)
app.use(require('./config/checkToken'));

//api (this style of file naming is a naming convention)
app.use('/api/users', require('./routes/api/users'));


//catch all route mount all other api routes before this
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log(`Express app running on port ${PORT}`)
});