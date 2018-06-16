//configurando conexao banco
var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sistemaestudo'
    });

    
}

module.exports = function(){
    return createDBConnection;
}
