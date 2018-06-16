function PessoasDAO(connection) {
    this._connection = connection;

}

PessoasDAO.prototype.lista = function (callback) {
    this._connection.query('SELECT * FROM PESSOAS', callback);
}

PessoasDAO.prototype.remove = function (callback) {
    this._connection.query('DELETE FROM PESSOAS WHERE IDPESSOAS = ', callback)
}

module.exports = function () {
    return PessoasDAO;

}