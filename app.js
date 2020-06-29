// CONFIGURAÇÃO DO SERVIDOR
var app = require('./config/server');

// ROTAS
// require('./app/routes/noticias')(app);
// require('./app/routes/form_add_noticia')(app);
// require('./app/routes/home')(app);


//ATIVANDO O SERVIDOR NA PORTA 3030
app.listen(3040, () => {
    console.log('Servidor ON');
});