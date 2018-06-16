//importa HTTP
var http = require('http');

//configura acesso ao servidor
var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos',
    headers:{'Accept':'application/json'}
};

//server pega config
http.get(configuracoes,function(res){
    console.log(res.statusCode);
    res.on('data',function(body){
        console.log('Corpo: ' + body);
    });
});