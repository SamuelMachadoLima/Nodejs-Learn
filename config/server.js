// TRAZENDO O EXPRESS PARA A UTILIZAÇÃO DO MESMO NO CÓDIGO
var app = require('express')();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// INCORPORANDO O EJS JUNTO AO EXPRESS ATRAVES DE UM MÉTODO
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;