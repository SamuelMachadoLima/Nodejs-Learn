module.exports = (application) => {
    application.get('/form_add_noticia', (req, res) => {
        res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
    });
    application.post('/noticias/salvar', (req, res) => {
        var noticia = req.body;

        req.assert('titulo', "O campo título é obrigatório.").notEmpty();
        req.assert('resumo', "O campo resumo é obrigatório.").notEmpty();
        req.assert('resumo', "O campo resumo deve conter entre 10 e 100 caeracteres.").len(10, 100);
        req.assert('autor', "O campo autor é obrigatório.").notEmpty();
        req.assert('data_noticia', "O campo data é obrigatório e deve ter o formato dia/mês/ano.").notEmpty();
        req.assert('autor', "O campo título é obrigatório.").notEmpty();
        req.assert('noticia', "O campo notícia é obrigatório.").notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
            return;
        }
        
        var connection = application.config.dbConnection();
        var Noticias = new application.app.models.Noticias(connection);

        Noticias.salvarNoticia(noticia, function (error, result) {
            res.redirect('/noticias');
        });
    });
}