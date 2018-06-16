module.exports = function (app) {
    //metodo de listar
    app.get('/produtos', function (req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, resultados) {
            res.format({
                // para responder navegador
                html: function () {
                    res.render("produtos/lista", { lista: resultados });
                },
                // para responder android
                json: function () {
                    res.json(resultados);
                }
            });
        });

        connection.end();
        console.log('Listagem de produtos');
    });

    // metodo remover
    app.get('/produtos/remove', function () {
        var connection = app.infra.connectionFactory();
        var produtosDAO = app.infra.ProdutosDAO(connection);
        var produto = ProdutosBanco.carrega(id, callback);
        if (produto) {
            produtosDAO.remove(produto, callback);
        }
        connection.end();
    });
    // metodo GET para carregar a pagina
    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form');
    });
    // metodo de post no form para invocar o salvar 
    app.post('/produtos', function (req, res) {

        //seta valores para ser salvos
        var produto = req.body;
        //seta conexao
        var connection = app.infra.connectionFactory();
        //seta DAO para invocar o metodo
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        //invoca salvar
        produtosDAO.salvar(produto, function (erros, resultados) {
            //exibir lista atualizada
            console.log(erros);
            res.redirect('/produtos');
        });
        connection.end();

    });
}