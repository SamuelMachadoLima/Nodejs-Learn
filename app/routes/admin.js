module.exports = (application) => {
    application.get('/form_add_noticia', (req, res) => {
        res.render("admin/form_add_noticia");
    });
    application.post('/noticias/salvar', (req, res) => {
        var noticia = req.body;
        
        var connection = application.config.dbConnection();
        var Noticias = new application.app.models.Noticias(connection);

        Noticias.salvarNoticia(noticia, function (error, result) {
            res.redirect('/noticias');
        });
    });
}