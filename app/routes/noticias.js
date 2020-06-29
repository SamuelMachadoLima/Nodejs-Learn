module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        var connection = require('../../config/dbConnection')();

        connection.query("SELECT * FROM noticias", function (error, result) {
            res.render('noticias/noticias', { noticia: result });
        });
    });
}