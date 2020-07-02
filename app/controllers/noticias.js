module.exports.noticias = function (application, req, res) {
    var connection = application.config.dbConnection();
    var Noticias = new application.app.models.Noticias(connection);

    Noticias.getNoticias(function (error, result) {
        res.render('noticias/noticias', { noticias: result });
    });
}

module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnection();
    var Noticias = new application.app.models.Noticias(connection);

    Noticias.getNoticia(function (error, result) {
        res.render('noticias/noticia', { noticia: result });
    });
}