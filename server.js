var app = require('express')();
var server = require('http').Server(app);
var path = require('path');
server.listen(80);

app.get('/*', function (req, res) {
    if (req.originalUrl === '/') {
        res.sendFile(path.join(__dirname, '/dist/index.html'));
    } else {
        res.sendFile(path.join(__dirname, '/dist' + req.originalUrl));
    }
});
