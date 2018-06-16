var app = require('./config/express')();

// setando porta de escuta
app.listen(3000, function () {
    console.log('Servidor Incializado');
});