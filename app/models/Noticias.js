function Noticias(connection){
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query("SELECT * FROM noticias", callback);
};

Noticias.prototype.getNoticia = function(callback){
    this._connection.query("SELECT * FROM noticias WHERE id_noticia = 9", callback);
};

Noticias.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query("insert into noticias set ?", noticia, callback);
};

module.exports = function(){
    return Noticias;
}