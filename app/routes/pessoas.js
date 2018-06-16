module.exports = function (app) {

    app.get('/pessoas', function (req, res) {

        var connection = app.infra.connectionFactory();
        var pessoasDAO = new app.infra.PessoasDAO(connection);

        pessoasDAO.lista(function (err, results) {

            res.render("pessoas/lista", { lista: results });
        });

        connection.end();

        console.log('listado os pessoas')
    });
    app.get('/pessoas/remove', function () {
        var connection = app.infra.connectionFactory();
        var pessoasDAO = app.infra.PessoasDAO(connection);
        var pessoas = PessoasDAO.carrega(id, callback);
        if (produto) {
            pessoasDAO.remove(produto, callback);
        }
    });
    app.get('/pessoas/form', function () {
        res.render('pessoas/form');
    })
    // metodo de salvar 
    app.post('/pessoas', function (req, res) {
        //seta conexao
        var connection = app.infra.connectionFactory();
        //seta DAO para invocar o metodo
        var pessoas = new app.infra.ProdutosDAO(connection);
        péssoasDAO.salva(pessoas, function (err, resultados) {
            //exibir lista atualizada
            res.render('pessoas/lista');
        })
    });
}