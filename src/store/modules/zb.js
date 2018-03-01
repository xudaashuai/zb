function zbDataCreate () {
    let mType = ['和田玉', '南红', '碧玉', '翡翠', '绿松石', '蜜蜡'];
    let uType = ['挂件', '手镯', '把件', '摆件', '珠链'];
    let data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
                编号: 's' + i,
                名称: 'null',
                饰品条码: 10000000 + Math.floor(Math.random() * 10000000),
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
                饰品条码: 10000000 + Math.floor(Math.random() * 10000000),
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
        zbData: zbDataCreate(),
    },
    getters: {
        zbColumns (state) {
            let columns = [];
            for (let key in state.zbData[0]) {
                columns.push({
                    key: key,
                    title: key,
                    sortable: true
                });
            }
            return columns;
        },
        typeData: (state) => (type) => state.zbData.filter((item) => item['材质'] === type),
    }
};

export default zb;
