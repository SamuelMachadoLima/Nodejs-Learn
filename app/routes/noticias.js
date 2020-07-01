module.exports = function (application) {
    application.get('/noticias', function (req, res) {
        var connection = application.config.dbConnection();
        var Noticias = new application.app.models.Noticias(connection);

        Noticias.getNoticias(function (error, result) {
            res.render('noticias/noticias', { noticias: result });
        });

    });
}