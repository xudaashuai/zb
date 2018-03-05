import axios from 'axios';

axios.defaults.baseURL = 'http://localhost/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function zbDataCreate () {
    let mType = ['和田玉', '南红', '碧玉', '翡翠', '绿松石', '蜜蜡'];
    let uType = ['挂件', '手镯', '把件', '摆件', '珠链'];
    let data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
                货号: 's' + i,
                名称: 'null',
                条码号: 10000000 + Math.floor(Math.random() * 10000000),
                材质: mType[i % mType.length],
                类型: uType[i % uType.length],
                品牌: '福顺和',
                证书号: i * 1203124 + i * 10000000,
                单位: '件',
                价格: Math.floor(Math.random() * 10000)
            }
        );
    }
    return data;
}

function sjDataCreate () {
    let mType = ['和田玉', '南红', '碧玉', '翡翠', '绿松石', '蜜蜡'];
    let uType = ['挂件', '手镯', '把件', '摆件', '珠链'];
    let data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
                编号: 's' + i,
                条形码: 10000000 + Math.floor(Math.random() * 10000000),
                材质: mType[i % mType.length],
                类型: uType[i % uType.length],
                品牌: '福顺和',
                证书号: i * 1203124 + i * 10000000,
                单位: '件',
                价格: Math.floor(Math.random() * 10000),
                图片: ''
            }
        );
    }
    return data;
}

const zb = {
        state: {
            mType: [
                '和田玉', '南红', '碧玉', '翡翠', '绿松石', '蜜蜡'
            ],
            uType: ['挂件', '手镯', '把件', '摆件', '珠链'],
            sp: zbDataCreate(),
            xql: [],
            yl: [],
            sjk: [],
            pj: [],
            rz: [],
            pd:[],
        },
        mutations: {
            set (state, data) {
                state[data.path] = data.data;
            }
        },
        getters: {
            spColumns (state) {
                let columns = [];
                for (let key in state.sp[0]) {
                    if (key !== '_id') {
                        let t = {
                            key: key,
                            title: key,
                            sortable: true,
                            width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                            field: key
                        };
                        if (key === '货号') {
                            t.isFrozen = true;
                        }
                        columns.push(t);
                    }
                }
                return columns;
            },
            xqlColumns (state) {
                return [{
                    key: '标价',
                    title: '标价',
                    sortable: true,
                    width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    field: '标价'
                }, {
                    key: '条码号',
                    title: '条码号',
                    sortable: true,
                    width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    field: '条码号',
                    isFrozen: true
                }, {
                    key: '进货日期',
                    title: '进货日期',
                    sortable: true,
                    width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    field: '进货日期'
                }, {
                    key: '名称',
                    title: '名称',
                    sortable: true,
                    width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    field: '名称'
                }, {
                    key: '主石',
                    title: '主石',
                    sortable: true,
                    width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    field: '主石'
                },];
                let columns = [];
                for (let key in state.sp[0]) {
                    if (key !== '_id') {
                        let t = {
                            key: key,
                            title: key,
                            sortable: true,
                            width: 120
                        };
                        if (key === '货号') {
                            t.fixed = 'left';
                        }
                        columns.push(t);
                    }
                }
                return columns;
            },
            pjColumns (state) {

                let columns = [];
                for (let key in state.pj[0]) {
                    if (key !== '_id') {
                        let t = {
                            key: key,
                            title: key,
                            sortable: true,
                            width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                            field: key
                        };
                        if (key === '货号') {
                            t.isFrozen = true;
                        }
                        columns.push(t);
                    }
                }
                return columns;
            },
            sjkColumns (state) {

                let columns = [];
                for (let key in state.sjk[0]) {
                    if (key !== '_id') {
                        let t = {
                            key: key,
                            title: key,
                            sortable: true,
                            width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                            field: key
                        };
                        if (key === '货号') {
                            t.isFrozen = true;
                        }
                        columns.push(t);
                    }
                }
                return columns;
            },
            ylColumns (state) {

                let columns = [];
                for (let key in state.yl[0]) {
                    if (key !== '_id') {
                        let t = {
                            key: key,
                            title: key,
                            sortable: true,
                            width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                            field: key
                        };
                        if (key === '货号') {
                            t.isFrozen = true;
                        }
                        columns.push(t);
                    }
                }
                return columns;
            },
            pdColumns (state) {

                let columns = [];
                for (let key in state.pd[0]) {
                    if (key !== '_id') {
                        let t = {
                            key: key,
                            title: key,
                            sortable: true,
                            width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                            field: key
                        };
                        if (key === '货号') {
                            t.isFrozen = true;
                        }
                        columns.push(t);
                    }
                }
                return columns;
            },
            rzColumns (state) {
                let columns = [];
                return [
                    {
                        key: '类型',
                        title: '类型',
                        width: 120,
                        titleAlign: 'center', columnAlign: 'center',
                        field: '类型', filterMultiple: true,
                        filters: [{
                            label: '入库',
                            value: '入库',
                        }, {
                            label: '出库',
                            value: '出库',
                        },],
                    }, {
                        title: '时间',
                        field: '时间',
                        width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                        filterMultiple: true,
                        filters: [{
                            label: '今天',
                            value: '今天',
                        }, {
                            label: '本周',
                            value: '本周',
                        },],
                    }, {
                        title: '模块',
                        field: '模块',
                        width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                        filterMultiple: true,
                        filters: [{
                            label: '商品',
                            value: '商品',
                        }, {
                            label: '镶嵌类',
                            value: '镶嵌类',
                        }, {
                            label: '设计款',
                            value: '设计款',
                        }, {
                            label: '配件',
                            value: '配件',
                        }, {
                            label: '原料',
                            value: '原料',
                        },],
                    }, {
                        title: '货号',
                        field: '货号',
                        width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    }, {
                        title: '用户',
                        field: '用户',
                        width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    }
                ];
                return columns;
            },
            typeData: (state) => (type) => state.sp.filter((item) => item['材质'] === type),
        },
        actions: {
            add (context, data) {
                return new Promise((resolve, reject) => {
                    if (data.进货日期) {
                        data.进货日期 = data.进货日期.toLocaleDateString();
                    }
                    data.状态 = '在库';
                    axios.post('/' + data.path, data).then(res => {
                        if (res.data.errmsg) {
                            if (res.data.code === 11000) {
                                reject('该商品已存在');
                            } else {
                                reject('错误代码' + res.data.code);
                            }
                        } else {
                            resolve(res.data);
                        }
                    }).catch(err => reject(err));
                });
            },
            get (content, data) {
                return new Promise((resolve, reject) => {
                    axios.get('/' + data.path).then(res => {
                        if (res.data.errmsg) {
                            reject('错误代码' + res.data.code);
                        } else {
                            content.commit('set', {path: data.path, data: res.data});
                            resolve();
                        }
                    }).catch(err => reject(err));
                });
            }
        }
    }


export default zb;
