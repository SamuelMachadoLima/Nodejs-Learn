module.exports = function (application) {
    application.get('/noticia', function (req, res) {
        var connection = application.config.dbConnection();
        var noticia = application.app.models.noticiasModel;

        noticia.getNoticia(connection, function (error, result) {
            res.render('noticias/noticia', { noticia: result });
        })

    });
}