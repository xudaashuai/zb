import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://120.25.75.23:8081/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const zb = {
    state: {
        mType: [
            '和田玉', '南红', '碧玉', '翡翠', '绿松石', '蜜蜡'
        ],
        uType: ['挂件', '手镯', '把件', '摆件', '珠链'],
        sp: [],
        xql: [],
        yl: [],
        sjk: [],
        pj: [],
        rz: [],
        pd: [],
        user: [],
        ylAll:[],
        pjAll:[]
    },
    mutations: {
        set (state, data) {
            state[data.path] = data.data;
        }
    },
    getters: {
        spColumns (state, getters, rootState) {
            return [
                {
                    'key': '名称',
                    'title': '名称',
                    'sortable': true,
                    isFrozen: true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '名称',
                    'overflowTitle': true
                },
                {
                    'key': '证书号',
                    'title': '证书号',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '证书号',
                    'overflowTitle': true
                },
                {
                    'key': '条码号',
                    'title': '条码号',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '条码号',
                    'overflowTitle': true
                },
                {
                    'key': '材质',
                    'title': '材质',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '材质',
                    'overflowTitle': true
                },
                {
                    'key': '类别',
                    'title': '类别',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '类别',
                    'overflowTitle': true
                },
                {
                    'key': '重量',
                    'title': '重量',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '重量',
                    'overflowTitle': true
                },
                {
                    'key': '进货日期',
                    'title': '进货日期',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货日期',
                    'overflowTitle': true
                },
                rootState.app.adminMode ? {
                    'key': '进货价',
                    'title': '进货价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货价',
                    'overflowTitle': true
                } : undefined,
                {
                    'key': '标价',
                    'title': '标价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '标价',
                    'overflowTitle': true
                },
                {
                    'key': '规格',
                    'title': '规格',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '规格',
                    'overflowTitle': true
                },
                {
                    'key': '数量',
                    'title': '数量',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '数量',
                    'overflowTitle': true
                },
                {
                    'key': '克价',
                    'title': '克价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '克价',
                    'overflowTitle': true
                },
                {
                    'key': '状态',
                    'title': '状态',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '状态',
                    'overflowTitle': true
                },
                {
                    'key': '图片',
                    'title': '图片',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '图片',
                    'overflowTitle': true,
                    componentName: 'image-view'
                },
                {
                    'key': '备注',
                    'title': '备注',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '备注',
                    'overflowTitle': true
                },
            ].filter(item => item);
        },
        xqlColumns (state, getters, rootState) {
            return [
                {
                    'key': '名称',
                    'title': '名称',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '名称',
                    isFrozen: true,
                    'overflowTitle': true
                },
                {
                    'key': '条码号',
                    'title': '条码号',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '条码号',
                    'isFrozen': true,
                    'overflowTitle': true
                },
                {
                    'key': '进货日期',
                    'title': '进货日期',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货日期',
                    'overflowTitle': true
                },
                rootState.app.adminMode ? {
                    'key': '进货价',
                    'title': '进货价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货价',
                    'overflowTitle': true
                } : undefined,
                {
                    'key': '主石',
                    'title': '主石',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '主石',
                    'overflowTitle': true,
                    formatter: function (rowData, rowIndex, pagingIndex, field) {
                        return rowData[field].名称 + rowData[field].重量 + 'g';
                    }
                },
                {
                    'key': '配石',
                    'title': '配石',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '配石',
                    componentName: 'items-view2'
                },
                {
                    'key': '标价',
                    'title': '标价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '标价',
                    'overflowTitle': true
                },
                {
                    'key': '状态',
                    'title': '状态',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '状态',
                    'overflowTitle': true
                },
                {
                    'key': '备注',
                    'title': '备注',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '备注',
                    'overflowTitle': true
                },
            ].filter(item => item);
        },
        pjColumns (state, getters, rootState) {
            return [
                {
                    'key': '名称',
                    'title': '名称',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '名称',
                    isFrozen: true,
                    'overflowTitle': true
                },
                {
                    'key': '重量',
                    'title': '重量',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '重量',
                    'overflowTitle': true
                },
                rootState.app.adminMode ? {
                    'key': '进货价',
                    'title': '进货价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货价',
                    'overflowTitle': true
                } : undefined,
                {
                    'key': '进货日期',
                    'title': '进货日期',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货日期',
                    'overflowTitle': true
                },
                {
                    'key': '标价',
                    'title': '标价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '标价',
                    'overflowTitle': true
                },
                {
                    'key': '状态',
                    'title': '状态',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '状态',
                    'overflowTitle': true
                },
                {
                    'key': '备注',
                    'title': '备注',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '备注',
                    'overflowTitle': true
                },].filter(item => item);
        },
        sjkColumns (state, getters, rootState) {
            return [
                {
                    'key': '名称',
                    'title': '名称',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    isFrozen: true,
                    'field': '名称',
                    'overflowTitle': true
                },
                {
                    'key': '条码号',
                    'title': '条码号',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '条码号',
                    'overflowTitle': true
                },
                {
                    'key': '组成',
                    'title': '组成',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '组成',
                    'overflowTitle': true,
                    componentName: 'items-view'
                },
                {
                    'key': '证书号',
                    'title': '证书号',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '证书号',
                    'overflowTitle': true
                },
                rootState.app.adminMode ? {
                    'key': '进货价',
                    'title': '进货价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货价',
                    'overflowTitle': true
                } : undefined,
                {
                    'key': '进货日期',
                    'title': '进货日期',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货日期',
                    'overflowTitle': true
                },
                {
                    'key': '标价',
                    'title': '标价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '标价',
                    'overflowTitle': true
                },
                {
                    'key': '状态',
                    'title': '状态',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '状态',
                    'overflowTitle': true
                },
                {
                    'key': '图片',
                    'title': '图片',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '图片',
                    'overflowTitle': true,
                    componentName: 'image-view'
                },
                {
                    'key': '备注',
                    'title': '备注',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '备注',
                    'overflowTitle': true
                },].filter(item => item);
        },
        ylColumns (state, getters, rootState) {
            return [
                {
                    'key': '名称',
                    'title': '名称',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '名称',
                    'overflowTitle': true
                },
                {
                    'key': '重量',
                    'title': '重量',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '重量',
                    'overflowTitle': true
                },
                {
                    'key': '进货日期',
                    'title': '进货日期',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货日期',
                    'overflowTitle': true
                },
                rootState.app.adminMode ? {
                    'key': '进货价',
                    'title': '进货价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货价',
                    'overflowTitle': true
                } : undefined, {
                    'key': '标价',
                    'title': '标价',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '标价',
                    'overflowTitle': true
                },
                {
                    'key': '状态',
                    'title': '状态',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '状态',
                    'overflowTitle': true
                },
                {
                    'key': '图片',
                    'title': '图片',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '图片',
                    'overflowTitle': true,
                    componentName: 'image-view'
                },
                {
                    'key': '备注',
                    'title': '备注',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '备注',
                    'overflowTitle': true
                },
            ].filter(item => item);
        },
        pdColumns (state, getters, rootState) {
            return [
                {
                    'key': '盘点时间',
                    'title': '盘点时间',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '进货日期',
                    'overflowTitle': true
                },
                {
                    'key': '盘点人',
                    'title': '盘点人',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '盘点人',
                    'overflowTitle': true
                },
                {
                    'key': '总盘点数目',
                    'title': '总盘点数目',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '总盘点数目',
                    'overflowTitle': true
                },
                {
                    'key': '盘点成功数目',
                    'title': '盘点成功数目',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '盘点成功数目',
                    'overflowTitle': true
                },
                {
                    'key': '缺失数目',
                    'title': '缺失数目',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '缺失数目',
                    'overflowTitle': true
                },
                {
                    'key': '缺失项目',
                    'title': '缺失项目',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '缺失项目',
                    'overflowTitle': true,
                    componentName: 'items-view'
                },
                {
                    'key': '备注',
                    'title': '备注',
                    'sortable': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'field': '备注',
                    'overflowTitle': true
                },
            ];
        },
        rzColumns (state, getters, rootState) {
            return [
                {
                    'key': '类型',
                    'title': '类型',
                    'width': 120,
                    'overflowTitle': true,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'field': '类型',
                    'filterMultiple': true,
                    'filters': [
                        {'label': '入库', 'value': '入库'},
                        {'label': '出库', 'value': '出库'}
                    ]
                },
                {
                    'title': '时间',
                    'field': '时间',
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'filterMultiple': true,
                    'overflowTitle': true,
                    'filters': [{'label': '今天', 'value': '今天'},
                        {'label': '本周', 'value': '本周'}]
                },
                {
                    'title': '模块',
                    'field': '模块',
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true,
                    'filterMultiple': true,
                    'overflowTitle': true,
                    'filters': [{'label': '商品', 'value': '商品'},
                        {'label': '镶嵌类', 'value': '镶嵌类'},
                        {
                            'label': '设计款',
                            'value': '设计款'
                        },
                        {'label': '配件', 'value': '配件'},
                        {'label': '原料', 'value': '原料'}]
                },
                {
                    'title': '物品',
                    'field': '物品',
                    'overflowTitle': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true
                },
                {
                    'title': '员工',
                    'field': '员工',
                    'overflowTitle': true,
                    'width': 120,
                    'titleAlign': 'center',
                    'columnAlign': 'center',
                    'isResize': true
                },
            ];
        },
        ezColumns () {
            return [
                {
                    key: '名称',
                    title: '名称',
                    sortable: true,
                    width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    field: '名称'
                },
                {
                    key: '条码号',
                    title: '条码号',
                    sortable: true,
                    width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    field: '条码号',
                    isFrozen: true
                },
                {
                    key: '进货日期',
                    title: '进货日期',
                    sortable: true,
                    width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    field: '进货日期'
                },
                {
                    key: '标价',
                    title: '标价',
                    sortable: true,
                    width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true,
                    field: '标价'
                },
            ];
        },
        allData: (state, getters, rootState) => state.sp.concat(state.xql).concat(state.sjk).filter((item) => item.状态 === '在库'),
        otherData: (state, getters, rootState) => state.pj.concat(state.yl).filter((item) => item.状态 === '在库'),
        typeData: (state, getters, rootState) => (type) => state.sp.filter((item) => item['材质'] === type),
    },
    actions: {
        init (context, data) {
            for (let model of ['sp', 'xql', 'yl', 'pj', 'sjk']) {
                context.dispatch('get', {path: model});
            }
        },
        add (context, data) {
            console.log(data);
            data.user = Cookies.get('user');
            data.进货日期 = new Date().toLocaleDateString() + new Date().toLocaleTimeString();
            if (data.path !== 'pd') {
                data.状态 = '在库';
            }
            return new Promise((resolve, reject) => {
                axios.post('/' + data.path, data).then(res => {
                    if (res.data.errmsg) {
                        if (res.data.code === 11000) {
                            reject('已存在');
                        } else {
                            reject('错误代码' + res.data.code);
                        }
                    } else {
                        resolve(res.data);
                        context.dispatch('get', {
                            path: data.path
                        });
                    }
                }).catch(err => {
                    console.log(err);
                    reject(err);
                });
            });
        },
        remove (context, data) {
            data.user = Cookies.get('user');
            data.进货日期 = new Date().toLocaleDateString() + new Date().toLocaleTimeString();
            return new Promise((resolve, reject) => {
                if (data.path === 'user' && data._id === 'admin') return;
                axios.post('/delete', {
                    _id: data._id
                }).then(res => {
                    if (res.data.errmsg) {
                        if (res.data.code === 11000) {
                            reject('该商品已存在');
                        } else {
                            reject('错误代码' + res.data.code);
                        }
                    } else {
                        resolve(res.data);
                        context.dispatch('get', {
                            path: data.path
                        });
                    }
                }).catch(err => {
                    console.log(err);
                    reject(err);
                });
            });
        },
        ck (context, data) {
            data.user = Cookies.get('username');
            return new Promise((resolve, reject) => {
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
        get (context, data) {
            console.log(data);
            return new Promise((resolve, reject) => {
                axios.get('/' + data.path).then(res => {
                    console.log(res);
                    if (res.data.errmsg) {
                        reject('错误代码' + res.data.code);
                    } else {
                        if (data.path === 'yl' || data.path === 'pj') {
                            context.commit('set', {
                                path: data.path, data: res.data.filter((item) => {
                                    return item._id !== item.名称;
                                })
                            });context.commit('set', {
                                path: data.path+'All', data: res.data.filter((item) => {
                                    return item._id === item.名称;
                                })
                            });
                        } else {
                            context.commit('set', {path: data.path, data: res.data});
                        }
                        resolve();
                    }
                }).catch(err => reject(err));
            });
        }
    }
};

export default zb;
