var app = require('express')();
var server = require('http').Server(app);
server.listen(80);

app.get('/*', function (req, res) {
    if (req.originalUrl === '/') {
        res.sendFile(__dirname + '/dist/index.html');
    } else {
        res.sendFile(__dirname + '/dist' + req.originalUrl);
    }
});
