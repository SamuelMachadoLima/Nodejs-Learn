// TRAZENDO O EXPRESS PARA A UTILIZAÇÃO DO MESMO NO CÓDIGO
var app = require('express')();
var consign = require('consign');

// INCORPORANDO O EJS JUNTO AO EXPRESS ATRAVES DE UM MÉTODO
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign().include('app/routes').into(app);

module.exports = app;