module.exports = function (application) {
    application.get('/noticia', function (req, res) {
        var connection = application.config.dbConnection();
        var Noticias = new application.app.models.Noticias(connection);

        Noticias.getNoticia(function (error, result) {
            res.render('noticias/noticia', { noticia: result });
        })

    });
}