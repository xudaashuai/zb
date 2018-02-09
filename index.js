var express = require('express');
var app = express();

// 路由：字符串类型
app.get('/*', function (req, res) {
    if (req.originalUrl==='/') {
        res.sendFile(__dirname + '/index.html');
    }else{
        res.sendFile(__dirname +req.originalUrl);
    }
});

app.listen(8081);
