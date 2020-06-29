// CONFIGURAÇÃO DO SERVIDOR
var app = require('./config/server');

//ATIVANDO O SERVIDOR NA PORTA 3030
app.listen(3040, () => {
    console.log('Servidor ON');
});