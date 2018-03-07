var express = require('express');
var app = express();
var http = require('http');
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
});
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
        res.send(200);
    }
    else {
        console.log(new Date().toLocaleTimeString(), req.method, req.path, req.body);
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
    yl: '原料',
    ck: '出库'
};
app.route('/:model')
    .get(function (req, res) {
        let model = req.params.model;
        db.collection(model).find({}).toArray(function (err, result) {
            if (err) {
                res.json(err);
                console.log(err);
            } else {
                res.json(result);
            }
        });
    })
    .post(function (req, res) {
        let model = req.params.model;
        if (model === 'ck') {
            delete req.body.path;
            if (req.body.物品类别 === '商品') {
                db.collection('sp').updateOne({
                    _id: req.body.物品,
                    状态: '在库'
                }, {$set: {状态: '已' + req.body.出库原因}}, (err, result) => {
                    if (err) {
                        res.json(err);
                    } else {
                        if (result.nModified === 0) {
                            res.json({
                                errmsg: '该商品好像不在库存中，请确认后刷新重试'
                            });
                        } else {
                            res.json(result);
                            db.collection('rz').insertOne(
                                {
                                    类型: '出库-' + req.body.出库原因,
                                    模块: mk[model],
                                    时间: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
                                    员工: req.body.员工,
                                    物品: req.body.物品,
                                    售价: req.body.售价
                                },
                                (err, result) => {
                                    if (err) {
                                        throw err;
                                        console.log(err);
                                    } else {

                                    }
                                }
                            );
                        }
                    }
                });
            } else {
                db.collection('yl').updateOne({
                    _id: req.body.物品,
                    状态: '在库',
                    重量: {$gte: req.body.重量},
                }, {$inc: {重量: -req.body.重量}}, (err, result) => {
                    if (err) {
                        res.json(err);
                    } else {
                        if (result.nModified === 0) {
                            res.json({
                                errmsg: '该商品好像不在库存中，请确认后刷新重试'
                            });
                        } else {
                            res.json(result);
                            db.collection('rz').insertOne(
                                {
                                    类型: '出库-' + req.body.出库原因,
                                    模块: mk[model],
                                    时间: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
                                    员工: req.body.员工,
                                    物品: req.body.物品,
                                    重量: req.body.重量
                                },
                                (err, result) => {
                                    if (err) {
                                        throw err;
                                        console.log(err);
                                    } else {

                                    }
                                }
                            );
                        }
                    }
                });
            }
        }
        /*
        todo 配件和原料的入库累加在遇到价格不同时的处理
        else if (model === 'pj' || model === 'yl') {
            delete req.body.path;
            db.collection(model).updateOne(req.body, function (err, result) {
                if (err) {
                    res.json(err);
                    console.log(err);
                } else {
                    res.json(result);
                    if (model === 'pd') {
                        db.collection('rz').insertOne(
                            {
                                类型: '盘点',
                                模块: mk[model],
                                时间: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
                                员工: req.body.user,
                            },
                            (err, result) => {
                                if (err) {
                                    throw err;
                                    console.log(err);
                                } else {

                                }
                            }
                        );
                    } else if (model != 'rz') {
                        db.collection('rz').insertOne(
                            {
                                类型: '入库',
                                模块: mk[model],
                                时间: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
                                员工: req.body.user,
                                物品: req.body._id,
                            },
                            (err, result) => {
                                if (err) {
                                    throw err;
                                    console.log(err);
                                } else {

                                }
                            }
                        );
                    }
                }
            });
        }
        */
        else if (model === 'login') {
            db.collection('user').findOne(req.body, (err, result) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        }
        else if (model === 'password') {
            db.collection('user').updateOne({
                username: req.body.username,
                password: req.body.oldPass,
            }, {$set: {password: req.body.newPass}}, (err, result) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        } else {
            delete req.body.path;
            db.collection(model).insertOne(req.body, function (err, result) {
                if (err) {
                    res.json(err);
                    console.log(err);
                } else {
                    res.json(result);
                    if (model === 'pd') {
                        db.collection('rz').insertOne(
                            {
                                类型: '盘点',
                                模块: mk[model],
                                时间: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
                                员工: req.body.user,
                            },
                            (err, result) => {
                                if (err) {
                                    throw err;
                                    console.log(err);
                                } else {

                                }
                            }
                        );
                    } else if (model != 'rz') {
                        db.collection('rz').insertOne(
                            {
                                类型: '入库',
                                模块: mk[model],
                                时间: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
                                员工: req.body.user,
                                物品: req.body._id,
                            },
                            (err, result) => {
                                if (err) {
                                    throw err;
                                    console.log(err);
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
var app2 = express();
http.Server(app2).listen(80);
app2.get('/*', function (req, res) {
    if (req.originalUrl === '/') {
        res.sendFile(__dirname + '/dist/index.html');
    } else {
        res.sendFile(__dirname + '/dist' + req.originalUrl);
    }
});
