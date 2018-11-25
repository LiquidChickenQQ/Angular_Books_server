var express = require('express');
var app = express();
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');
var book = require('./controllers/BookController');


sequelize.sync();

app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use('/book', book);

app.listen(3000, function(){
    console.log('App is listening on 3000.')
});