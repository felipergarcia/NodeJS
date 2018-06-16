function ProdutosDAO(connection) {
    this._connection = connection;

}

ProdutosDAO.prototype.lista = function (callback) {
    this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.remove = function (callback) {
    this._connection.query('delete from produtos where idProdutos = ', callback)
}

ProdutosDAO.prototype.salvar = function(produto, callback){
    this._connection.query('insert into produtos set ?', produto, callback);
    console.log("produtosDAO")
    console.log(produto);
}

module.exports = function () {
    return ProdutosDAO;

}