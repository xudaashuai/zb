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
    ck: '出库',
    user: '用户'
};

function logging (rz) {
    db.collection('rz').insertOne(rz, (err, result) => {
            if (err) {
                throw err;
                console.log(err);
            } else {

            }
        }
    );
}

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
            if (req.body.物品类别 === '商品') {
                let array = {};
                for (let item of req.body.物品) {
                    console.log(item);
                    db.collection('item').updateOne({
                        _id: item,
                    }, {
                        $set: {
                            状态: '已' + req.body.出库原因
                        }
                    }, (err, result) => {
                        if (err) {
                            console.log(err);
                            res.json(err);
                        } else {
                            result = result.result;
                            console.log(result);
                            if (result.n === 0) {
                                array[item] = '已存在';
                                console.log(Object.keys(array).length);
                                console.log(array);
                                if (Object.keys(array).length === req.body.物品.length) {
                                    res.json(array);
                                }
                            } else {
                                array[item] = '出库成功';
                                if (Object.keys(array).length === req.body.物品.length) {
                                    res.json(array);
                                }
                                if (req.body.出库原因 === '出售') {
                                    db.collection('cs').insertOne(
                                        {
                                            时间: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
                                            商品: item,
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
                                db.collection('rz').insertOne(
                                    {
                                        类型: '出库-' + req.body.出库原因,
                                        模块: mk[model],
                                        时间: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
                                        员工: req.body.员工,
                                        物品: item,
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
                }
            }
            else {
                db.collection('yl').updateOne({
                    _id: req.body.物品,
                    状态: '在库',
                    重量: {$gte: req.body.重量},
                }, {$inc: {重量: -req.body.重量}}, (err, result) => {
                    if (err) {
                        res.json(err);
                    } else {
                        console.log(result);
                        if (result.nModified === 0) {
                            res.json({
                                errmsg: '该商品好像不在库存中，请确认后刷新重试'
                            });
                        } else {
                            res.json(result);
                            db.collection('rz').insertOne({
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
        else if (model === 'gh') {
            let array = {};
            for (item of req.body.物品) {
                db.collection('item').updateOne({
                    _id: req.body.物品,
                }, {$set: {状态: '在库'}}, (err, result) => {
                    if (err) {
                        res.json(err);
                    } else {
                        if (result.nModified === 0) {
                            array[item.条码号] = '已在库中';
                            if (array.keys().length === req.body.物品.length) {
                                res.json(array);
                            }
                        } else {
                            array[item.条码号] = '归还成功';
                            if (array.keys().length === req.body.物品.length) {
                                res.json(array);
                            }
                            db.collection('rz').insertOne(
                                {
                                    类型: '归还',
                                    模块: mk[model],
                                    时间: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
                                    员工: req.body.员工,
                                    物品: item,
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
        //todo 配件和原料的入库累加在遇到价格不同时的处理
        else if (model === 'item') {
            let type = req.body.type;
            if (type === 'pj' || type === 'yl') {
                db.collection(model).insertOne(req.body, (err, result) => {
                    if (err) {
                        res.json(err);
                        console.log(err);
                    } else {
                        db.collection(model).updateOne({
                            _id: req.body.名称
                        }, {
                            $inc: {
                                重量: req.body.重量
                            }
                        }, function (err, result) {
                            if (err) {
                                res.json(err);
                                console.log(err);
                            } else {
                                console.log(result.result);
                                if (result.result.nModified === 1) {
                                    res.json(result);
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
                                } else {
                                    db.collection(model).insertOne({
                                        ...req.body, _id: req.body.名称
                                    }, function (err, result) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            db.collection('rz').insertOne(req.body, function (err, result) {
                                                if (err) {
                                                    res.json(err);
                                                    console.log(err);
                                                } else {
                                                    res.json(result);
                                                    let rz = {
                                                        类型: '入库',
                                                        模块: mk[model],
                                                        时间: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
                                                        员工: req.body.user,
                                                        物品: req.body._id,
                                                    };
                                                    logging(rz);
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                        });
                    }
                });
            } else {
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
        }
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
        }
        else if (model === 'user') {
            delete req.body.path;
            db.collection(model).insertOne(req.body, function (err, result) {
                if (err) {
                    res.json(err);
                    console.log(err);
                } else {
                    res.json(result);
                    db.collection('rz').insertOne(
                        {
                            类型: '添加用户',
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
            });
        }
        else if (model === 'delete') {
            db.collection('user').deleteOne(req.body, function (err, result) {
                if (err) {
                    res.json(err);
                    console.log(err);
                } else {
                    res.json(result);
                    db.collection('rz').insertOne(
                        {
                            类型: '删除员工',
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
            });
        }
        else {
            db.collection(model).insertOne(req.body, function (err, result) {
                if (err) {
                    res.json(err);
                    console.log(err);
                } else {
                    res.json(result);
                    if (model === 'pd') {
                        db.collection('rz').insertOne({
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
