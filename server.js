var express = require('express');
var app = express();
var http=require('http')
var server = http.Server(app);
var path = require('path');
server.listen(8081);
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://120.25.75.23:27017/data';
var db = null;
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

MongoClient.connect(url, function (err, d) {
    if (err) throw err;
    console.log('数据库已创建!');
    db = d.db('data');
    console.log(db);
});
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});
let mk = {
    sp: '商品',
    sjk: '设计款',
    xql: '镶嵌类',
    pj: '配件',
    pd: '盘点',
    rz: '日志',
    yl: '原料'
};
app.route('/:model')
    .get(function (req, res) {
        let model = req.params.model;
        db.collection(model).find({}).toArray(function (err, result) {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    })
    .post(function (req, res) {
        let model = req.params.model;
        console.log(req);
        if (model === 'ck') {
            if ('') {

            }
        } else {
            delete req.body.path;
            db.collection(model).insertOne(req.body, function (err, result) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(result);
                    if (model === 'pd') {
                        db.collection('rz').insertOne(
                            {
                                类型: '盘点',
                                模块: mk[model],
                                时间: new Date(),
                                用户: req.body.user,
                            },
                            (err, result) => {
                                if (err) {
                                    throw err;
                                } else {

                                }
                            }
                        );
                    } else if (model != 'rz') {
                        db.collection('rz').insertOne(
                            {
                                类型: '入库',
                                模块: mk[model],
                                时间: new Date(),
                                用户: req.body.user,
                                货号: req.body._id,
                            },
                            (err, result) => {
                                if (err) {
                                    throw err;
                                } else {

                                }
                            }
                        );
                    }
                }
            });
        }
    })
    .put(function (req, res) {

    });
var app2=express()
http.Server(app2).listen(8080)
app2.get('/*', function (req, res) {
    if (req.originalUrl === '/') {
        res.sendFile(__dirname + '/dist/index.html');
    } else {
        res.sendFile(__dirname + '/dist' + req.originalUrl);
    }
});
