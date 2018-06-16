//setando dependecias pra ser trabalhar
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function () {
    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //setando uso do body-parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // incializando o express-load para carregar as rotas automaticas
    load('routes', { cwd: 'app' })
        .then('infra')
        .into(app);
    return app;
}