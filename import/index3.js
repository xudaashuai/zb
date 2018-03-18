var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://120.25.75.23:27017/data';
t = [
    {"名称":"紫晶猫咪吊坠","货号":"D1503102013Y","证书号":"FSH0222","重量（g）":"2.4","数量":"1","价格":"380",},
    {"名称":"托帕猫咪吊坠","货号":"D1503172014Y","证书号":"FSH0223","重量（g）":"2.7","数量":"1","价格":"380",},
    {"名称":"橄榄石猫咪吊坠","货号":"D1503102016Y","证书号":"FSH0224","重量（g）":"2.6","数量":"2","价格":"380","备注":"改编1至【星空】"},
    {"名称":"紫晶圆戒指","货号":"J1503102023Y","证书号":"FSH0225","重量（g）":"2.9","规格":"14#","数量":"1","价格":"280",},
    {"名称":"紫晶圆戒指","货号":"J1503071024Y","证书号":"FSH0226","重量（g）":"2.1","规格":"14#","数量":"1","价格":"280",},
    {"名称":"橄榄石圆戒指","货号":"J1503066027Y","证书号":"FSH0227","重量（g）":"2.4","规格":"14#","数量":"1","价格":"280",},
    {"名称":"碧玺马眼戒指","货号":"J1503066029Y","证书号":"FSH0228","重量（g）":"1.7","规格":"14#","数量":"1","价格":"280",},
    {"名称":"碧玺天鹅吊坠","货号":"D1503213031Y","证书号":"FSH0230","重量（g）":"2.1","数量":"1","价格":"380",},
    {"名称":"紫晶天鹅吊坠","货号":"D1503064033Y","证书号":"FSH0231","重量（g）":"2.1","数量":"1","价格":"380",},
    {"名称":"石榴石耳钉","货号":"R1503213034Y","证书号":"FSH0232","重量（g）":"3","数量":"1","价格":"280",},
    {"名称":"紫水晶水滴耳环","货号":"R1503085036Y","证书号":"FSH0233","重量（g）":"2.95","数量":"1","价格":"280",},
    {"名称":"紫水晶心型戒指","货号":"J1503095037Y","证书号":"FSH0234","重量（g）":"2.36","数量":"1","价格":"280",},
    {"名称":"托帕石蝴蝶结吊坠","货号":"D1503095043Y","证书号":"FSH0235","重量（g）":"5.14","数量":"1","价格":"380",},
    {"名称":"紫水晶青蛙吊坠","货号":"D1503060044Y","证书号":"FSH0236","重量（g）":"4.56","数量":"1","价格":"380",},
    {"名称":"紫水晶耳环","货号":"R1503075045Y","证书号":"FSH0237","重量（g）":"2.5","数量":"1","价格":"280",},
    {"名称":"黄水晶兔子吊坠","货号":"D1503075047Y","证书号":"FSH0238","重量（g）":"2.73","数量":"1","价格":"380",},
    {"名称":"紫水晶鱼吊坠","货号":"D1503070048Y","证书号":"FSH0239","重量（g）":"2.13","数量":"1","价格":"700",},
    {"名称":"碧玺圆手链","货号":"L1503125054Y","证书号":"FSH0241","重量（g）":"2.6","数量":"1","价格":"280","备注":"改编至【星空】"},
    {"名称":"托帕瑞士兰手链","货号":"L1503115055Y","证书号":"FSH0242","重量（g）":"4.22","数量":"1","价格":"280","出售日期":"2017.8.20已售",},
    {"名称":"紫水晶天鹅吊坠","货号":"D1503065057Y","证书号":"FSH0243","重量（g）":"2.22","数量":"1","价格":"380",},
    {"名称":"碧玺钥匙项链","货号":"L1503195058Y","证书号":"FSH0244","重量（g）":"2.88","数量":"1","价格":"280","备注":"改编至【星空】"},
    {"名称":"紫水晶三角戒指","货号":"J1503060060Y","证书号":"FSH0245","重量（g）":"1.6","数量":"1","价格":"280",},
    {"名称":"碧玺水滴手链","货号":"L1503200062Y","证书号":"FSH0246","重量（g）":"5.1","数量":"1","价格":"280",},
    {"名称":"托帕石小鸭吊坠","货号":"D1503070063Y","证书号":"FSH0247","重量（g）":"3.01","数量":"1","价格":"380",},
    {"名称":"托帕瑞士兰小兔吊坠","货号":"D1503095064Y","证书号":"FSH0248","重量（g）":"3.04","数量":"1","价格":"380","出售日期":"2017.12.30送人",},
    {"名称":"紫水晶天使吊坠","货号":"D1503055065Y","证书号":"FSH0249","重量（g）":"3.5","数量":"1","价格":"380","出售日期":"2017.8.20已售",},
    {"名称":"紫水晶心型戒指","货号":"J1503065068Y","证书号":"FSH0250","重量（g）":"1.1","数量":"1","价格":"280",},
    {"名称":"紫水晶乌龟吊坠","货号":"D1503060069Y","证书号":"FSH0251","重量（g）":"2.39","数量":"1","价格":"380",},
    {"名称":"紫水晶小鸭吊坠","货号":"D1503095070Y","证书号":"FSH0252","重量（g）":"3.51","数量":"1","价格":"380",},
    {"名称":"黄水晶螃蟹吊坠","货号":"D1503080071Y","证书号":"FSH0253","重量（g）":"2.61","数量":"1","价格":"380",},
    {"名称":"石榴石小鸟耳钉","货号":"E1503070073Y","证书号":"FSH0254","重量（g）":"1.75","数量":"1","价格":"280","备注":"1只改编至【游园惊梦】"},
    {"名称":"托帕石吊坠","货号":"D1503080075Y","证书号":"FSH0255","重量（g）":"4.24","数量":"1","价格":"380","出售日期":"2017.5.20已售",},
    {"名称":"碧玺钥匙吊坠","货号":"D1503105076Y","证书号":"FSH0256","重量（g）":"0.63","数量":"1","价格":"380",},
    {"名称":"碧玺手链","货号":"L1503145079Y","证书号":"FSH0257","重量（g）":"3.33","数量":"1","价格":"280",},
    {"名称":"黄水晶小鸭吊坠","货号":"D1503070080Y","证书号":"FSH0258","重量（g）":"2.54","数量":"1","价格":"380",},
    {"名称":"红碧玺戒指","货号":"J1503086083Y","证书号":"FSH0259","规格":"17#16#14#","数量":"3","价格":"280",},
    {"名称":"黄碧玺戒指","货号":"J1503086084Y","证书号":"FSH0260","规格":"14#","数量":"1","价格":"280",},
    {"名称":"橄榄石戒指","货号":"J1503056085Y","证书号":"FSH0261","规格":"14#","数量":"1","价格":"280",},
    {"名称":"橄榄石吊坠","货号":"D1503050087Y","证书号":"FSH0262","数量":"1","价格":"380",},
    {"名称":"橄榄石黄鹂鸟吊坠","货号":"D1503072088Y","证书号":"FSH0263","数量":"2","价格":"380",},
    {"名称":"碧玺蝴蝶吊坠","货号":"D1503077089Y","证书号":"FSH0264","数量":"2","价格":"380",},
    {"名称":"玉髓羽毛吊坠","货号":"D1503161091Y","证书号":"FSH0265","重量（g）":"8.2","数量":"1","价格":"380",},
    {"名称":"玉髓圆戒指","货号":"J1503105092Y","证书号":"FSH0266","重量（g）":"3.4","数量":"1","价格":"280",},
    {"名称":"欧泊戒指","货号":"J1503170095Y","证书号":"FSH0267","重量（g）":"2.8","数量":"1","价格":"280","出售日期":"2017.9.8已售",},
    {"名称":"玉髓戒指","货号":"J1503167096Y","证书号":"FSH0268","重量（g）":"5.1","数量":"3","价格":"280",},
    {"名称":"石榴石四叶花戒指","货号":"J1503153097Y","证书号":"FSH0269","重量（g）":"3.4","数量":"3","价格":"280",},
    {"名称":"石榴石扣型戒","货号":"J1503153098Y","证书号":"FSH0270","重量（g）":"2.6","数量":"1","价格":"280",},
    {"名称":"石榴石马眼戒","货号":"J1503109099Y","证书号":"FSH0271","重量（g）":"2.4","数量":"3","价格":"280",},
    {"名称":"紫水晶方戒","货号":"J1503177101Y","证书号":"FSH0272","重量（g）":"3.3","数量":"3","价格":"280",},
    {"名称":"紫晶椭圆戒指","货号":"J1503150102Y","证书号":"FSH0273","重量（g）":"2.4","数量":"2","价格":"280",},
    {"名称":"紫晶圆戒指","货号":"J1503040103Y","证书号":"FSH0274","重量（g）":"1","数量":"2","价格":"280",},
    {"名称":"橄榄石戒指","货号":"J1503040104Y","证书号":"FSH0275","重量（g）":"1.5","数量":"7","价格":"280",},
    {"名称":"碧玺戒指","货号":"J1503050105Y","证书号":"FSH0276","重量（g）":"1.7","数量":"3","价格":"280",},
    {"名称":"碧玺耳钉","货号":"R1503091106Y","证书号":"FSH0277","重量（g）":"1.4","数量":"1","价格":"280",},
    {"名称":"紫晶耳环","货号":"R1503180107Y","证书号":"FSH0278","重量（g）":"3.1","数量":"1","价格":"280",},
    {"名称":"托帕方戒","货号":"J1503180108Y","证书号":"FSH0279","重量（g）":"2","数量":"1","价格":"280","出售日期":"2017.2.4已售",},
    {"名称":"托帕圆戒","货号":"J1503180109Y","证书号":"FSH0280","重量（g）":"2.4","数量":"1","价格":"280",},
    {"名称":"熊猫玉髓吊坠","货号":"D1503080112Y","证书号":"FSH0281","重量（g）":"11.6","数量":"1","价格":"380",},
    {"名称":"熊玉髓吊坠","货号":"D1503080113Y","证书号":"FSH0282","重量（g）":"10.6","数量":"1","价格":"380",},
    {"名称":"珍珠粉耳钉","货号":"R1503080114Y","证书号":"FSH0283","重量（g）":"3.9","数量":"1","价格":"280",},
    {"名称":"紫晶方形手链","货号":"L1503180116Y","证书号":"FSH0284","重量（g）":"6.4","数量":"1","价格":"280",},
    {"名称":"心形珍珠耳环","货号":"R1503180117Y","证书号":"FSH0285","重量（g）":"5.6","数量":"1","价格":"280",},
    {"名称":"红玛瑙银童镯","货号":"Z1503113118Y","证书号":"FSH0286","重量（g）":"24.5","数量":"1对","价格":"280",},
    {"名称":"珍珠银手链","货号":"L1503180119Y","证书号":"FSH0287","重量（g）":"4.8","数量":"1","价格":"280",},
    {"名称":"四瓣花项链","货号":"L1503084120Y","证书号":"FSH0288","重量（g）":"4.4","数量":"1","价格":"180",},
    {"名称":"方圆项链","货号":"L1503074121Y","证书号":"FSH0289","重量（g）":"3.9","数量":"1","价格":"180",},
    {"名称":"方锁项链","货号":"L1503082122Y","证书号":"FSH0290","重量（g）":"3.7","数量":"1","价格":"180",},
    {"名称":"心锁项链","货号":"L1503072123Y","证书号":"FSH0291","重量（g）":"3.3","数量":"1","价格":"180",},
    {"名称":"925银链","证书号":"FSH0292","数量":"30条","价格":"65/g",},

];

MongoClient.connect(url, function (err, d) {
    if (err) throw err;
    console.log('数据库已创建!');
    db = d.db('data');
    for (item of t) {
        if(item.扫描码){
        item.条码号= item.扫描码
        item._id= item.扫描码
        delete item.扫描码}
        else {

            item.条码号= item.证书号
            item._id= item.证书号
        }
        if (item.证书号&&item.条码号&&item.名称)
        db.collection('xql').insertOne( {
                    ...item,
                    状态: '在库'
            });
        else{
            console.log(item)
        }
    }
});
