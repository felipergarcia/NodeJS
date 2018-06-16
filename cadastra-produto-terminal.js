//importa HTTP
var http = require('http');

//configura acesso ao servidor
var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

//server pega config
var client = http.request(configuracoes, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('Corpo: ' + body);
    });
});
var produto = {
    descricaoproduto: ' fazendo importacao ',
    grupoproduto: '1',
    valor:'10'
};
client.end(JSON.stringify(produto));