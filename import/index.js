var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://120.25.75.23:27017/data';
t = [
    {
        '货号': 'D17030001H',
        '扫描码': 'FSH0123',
        '名称': '百合',
        '价格': '35800',
        '数量': '1',
        '备注': '白籽随心如意G1501C30126H/6mm玉化砗磲108颗W1608A16012CQ/天河石桶珠W1608B2001T/天河石鼓珠W1608A12002T/11mm天河石珠2颗W1608A33003T/8mm天河石珠10颗',
        '状态': '白籽随心2018.1.29已售，余链子'
    },
    {
        '货号': 'D17030002H',
        '扫描码': 'FSH0124',
        '名称': '孔雀翎',
        '价格': '9800',
        '数量': '1',
        '备注': '黄瓜把件G1501B280137H/孔雀石珠串10颗/珐琅13g/虎睛石/青金/翡翠粒',
        '状态': '2017.10.22已售'
    },
    {
        '货号': 'D17030003H',
        '扫描码': 'FSH0125',
        '名称': '人间四月天',
        '价格': '16000',
        '数量': '1',
        '备注': '和田籽料G1610B17246H/粉色贝/14K包金扣头/草莓晶/菩提/珊瑚玉',
    },
    {
        '货号': 'D17030004H',
        '扫描码': 'FSH0126',
        '名称': '墨色·流云',
        '价格': '8500',
        '数量': '1',
        '备注': '和田白玉竹笋G1507B150231H/和田白玉镂空珠1颗L1408Q1060016H/砭石项圈',
        '状态': '待修理'
    },
    {
        '货号': 'D17030005H',
        '扫描码': 'FSH0127',
        '名称': '涅槃',
        '价格': '15000',
        '数量': '1',
        '备注': '和田玉青籽G1411B57122H/沉香木水滴形一条FSH0342',
    },
    {
        '货号': 'D17030006H',
        '扫描码': 'FSH0128',
        '名称': '阿尔忒弥斯',
        '价格': '8600',
        '数量': '1',
        '备注': '和田祥兽皮带扣G1504B50224H/阿拉善玛瑙雕刻珠3颗S1611B8003A/白珊瑚珠链88颗W1608A8012S/黄色战国红大圆珠',
    },
    {
        '货号': 'D17030007H',
        '扫描码': 'FSH0129',
        '名称': '天空之城',
        '价格': '25000',
        '数量': '1',
        '备注': '黄口料仿古牌G1610B8264H/S绿松石12.1g/和田玉三通/阿拉善玛瑙圆珠2个S1611B8003A/血丝菩提1.5条',
    },
    {
        '货号': 'D17030008H',
        '扫描码': 'FSH0130',
        '名称': '禅定·济公',
        '价格': '12000',
        '数量': '1',
        '备注': '黑皮籽料济公G1411B340109H/8mm小叶紫檀/菩提子/和田随形珠2颗',
    },
    {
        '货号': 'D17030009H',
        '扫描码': 'FSH0131',
        '名称': '白籽-觉',
        '价格': '35000',
        '数量': '1',
        '备注': '和田玉白籽独籽G1411B57118H/和田玉镂空珠（小）3颗/和田青玉柱手链W1510A25004H 12颗中的一颗/和田随形珠/砗磲6mm珠链L1503B104CQ 83颗',
    },
    {
        '货号': 'D17030010H',
        '扫描码': 'FSH0132',
        '名称': '万物生',
        '价格': '3900',
        '数量': '1',
        '备注': '和田蜗牛G1411B160115H/白牛角南瓜珠/和田玉柱1个W1510A25004H/血丝菩提',
    },
    {
        '货号': 'D17030011H',
        '扫描码': 'FSH0133',
        '名称': '禅定·鹅如意',
        '价格': '18500',
        '数量': '1',
        '备注': '和田籽料鹤如意G1411B240110H/红沙沉木6mm/菩提/随形和田珠/金属配饰',
    },
    {
        '货号': 'D17030012H',
        '扫描码': 'FSH0134',
        '名称': '守护·朱雀',
        '价格': '16000',
        '数量': '1',
        '备注': '干青龙凤柱W1608B8341F/紫绿龙扳指W1608A22004Z/小叶紫檀',
        '状态': '2017.9.1已售'
    },
    {
        '货号': 'D17030013H',
        '扫描码': 'FSH0151',
        '名称': '墨色·飘翠',
        '价格': '16000',
        '数量': '1',
        '备注': 'W1608C4337F/证书号：W1608002389',
    },
    {
        '货号': 'D17030014H',
        '扫描码': 'FSH0136',
        '名称': '锦红',
        '价格': '4800',
        '数量': '1',
        '备注': '南红塔链W1605A35025N/W1605A22026N/W1605A18033N/南红项链W1605A24030N/排扣',
    },
    {
        '货号': 'D17030015H',
        '扫描码': 'FSH0137',
        '名称': '水晶宫',
        '价格': '4400',
        '数量': '1',
        '备注': '南红长链W1605A18035N/南红小胖鱼W1605B3014N/水晶珠子',
        '状态': '2017.8.11已售'
    },
    {
        '货号': 'D17030016H',
        '扫描码': 'FSH0138',
        '名称': '游园惊梦',
        '价格': '5000',
        '备注': '2A7mm砗磲108颗W1608B1009CQ/红珊瑚树枝W1608A5001S/崖柏平安扣W1605A607YB/石榴石小鸟耳钉1只E1503070073Y/珐琅',
    },
    {
        '货号': 'D17030017H',
        '扫描码': 'FSH0139',
        '名称': '漠',
        '价格': '4800',
        '数量': '1',
        '备注': '6mm崖柏珠链老料100颗FSH0347/蜜蜡异形平安扣FSH0351、平安扣A1611110611/珊瑚玉灯笼1个A1611102102',
    },
    {
        '货号': 'D17030018H',
        '扫描码': 'FSH0140',
        '名称': '霁蓝',
        '价格': '3900',
        '数量': '1',
        '备注': '青金石W1605Q207001Q/W1605Q144002Q/珐琅/小叶紫檀',
    },
    {'货号': 'D17030019H', '扫描码': 'FSH0141', '名称': '迷雾森林之狮', '价格': '3800', '数量': '1', '备注': '盐源玛瑙狮头G1611B8007YY',},
    {'货号': 'D17030020H', '扫描码': 'FSH0142', '名称': '迷雾森林之鸟', '价格': '2100', '数量': '1', '备注': '阿拉善玛瑙G1611B6002A',},
    {
        '货号': 'D17030021H',
        '扫描码': 'FSH0143',
        '名称': '宫·碧玉 【长链】',
        '价格': '6500',
        '数量': '1',
        '备注': '碧玉项链W1509B12017B，L1405B16018B/W1509B9006B/珊瑚玉葫芦S1412A5005',
    },
    {
        '货号': 'D17030022H',
        '扫描码': 'FSH0144',
        '名称': '游园惊梦2',
        '价格': '2500',
        '数量': '1',
        '备注': '崖柏平安无事牌G1412B203YB/红珊瑚枝W1608A5002S/925景泰蓝3.7g/绿松石0.35g',
    },
    {
        '货号': 'D17030023H',
        '扫描码': 'FSH0145',
        '名称': '柏上花',
        '价格': '3500',
        '数量': '1',
        '备注': '蜜蜡花W1605A131015ML/崖柏珠1颗/天竺菩提1颗/哈密瓜菩提1颗/牛皮绳/周生生保险扣',
    },
    {'货号': 'D17030024H', '扫描码': 'FSH0146', '名称': '楼兰·青金', '价格': '6900', '数量': '1', '备注': '18K金镶青金挂坠D1405A266002C',},
    {
        '货号': 'D17030025H',
        '扫描码': 'FSH0147',
        '名称': '曼珠沙华3',
        '价格': '3600',
        '数量': '1',
        '备注': '紫龙晶鼓珠W1608Q43001C/紫龙晶桶珠W1608Q35002C/9mm白珊瑚108颗W1608A8009S/景泰蓝珠1颗',
    },
    {
        '货号': 'D17030026H',
        '扫描码': 'FSH0148',
        '名称': '如·意',
        '价格': '6000',
        '数量': '1',
        '备注': '翡翠佛手W50702232/翡翠如意W50703591',
        '状态': '2017.9.2已售'
    },
    {
        '货号': 'D17030027H',
        '扫描码': 'FSH0149',
        '名称': '宫·青玉【项圈】',
        '价格': '3900',
        '数量': '1',
        '备注': '和田青玉珠40颗链LW1407A2402H/和田青玉大镂空珠1颗W1509A1201H/和田青玉大桶珠2颗W1510A2015H/南红大隔珠2颗/黄铜配饰',
    },
    {'货号': 'D17030028H', '扫描码': 'FSH0150', '名称': '南红莲蓬', '价格': '29000', '数量': '1', '备注': '南红W1601C4002N',},
    {
        '货号': 'D17030029H',
        '扫描码': 'FSH0001',
        '名称': '凤·舞',
        '价格': '62300',
        '数量': '1',
        '备注': '籽料108颗珠L1501B26007H/籽料莲蓬W1601B60059H/籽料凤W1511B60028H/寿山石/南红/和田玉珠',
        '状态': '2017.11.18已售'
    },
    {
        '货号': 'D17030030H',
        '扫描码': 'FSH0022',
        '名称': '墨色·留白',
        '价格': '6000',
        '数量': '1',
        '备注': '和田白玉转运柱W1510C1027H/天眼玛瑙宝瓶W1605A3004M/药师珠/和田玉珠',
    },
    {
        '货号': 'D17030031H',
        '扫描码': 'FSH0023',
        '名称': '墨色·悟道',
        '价格': '18800',
        '数量': '1',
        '备注': '和田籽料悟道W1601C10039H/星月菩提10颗/黑玛瑙/项圈',
        '状态': '方秋仙'
    },
    {
        '货号': 'D17030032H',
        '扫描码': 'FSH0002',
        '名称': '星空',
        '价格': '4800',
        '数量': '1',
        '备注': '碧玺珠链L1409B002BX一整条L1409B001BX半条/翡翠树叶W1506Q275042F/925银橄榄石猫咪D1503102016Y/可选：碧玺925银手链L1503195058Y/L1503125054Y',
    },
    {
        '货号': 'D17030033H',
        '扫描码': 'FSH0014',
        '名称': '境界·鱼',
        '价格': '15000',
        '数量': '1',
        '备注': '籽料白鱼W1601C10050H/和田玉小平安扣E1405B3004H/和田随形珠2颗/绿幽灵4颗/黄金楠木珠98颗/白水晶珠92颗/其他木珠',
    },
    {
        '货号': 'D17030034H',
        '扫描码': 'FSH0015',
        '名称': '浮生莲',
        '价格': '3600',
        '数量': '1',
        '备注': '南红W1605A5012N/蜜蜡W1605A84013ML/翡翠平安扣2个W1506A27067BF',
    },
    {
        '货号': 'D17030035H',
        '扫描码': 'FSH0024',
        '名称': '墨色·莲花',
        '价格': '3500',
        '数量': '1',
        '备注': '籽料小花W1601B30064H/星月菩提/黑檀木/砭石/银项圈',
    },
    {
        '货号': 'D17030036H',
        '扫描码': 'FSH0016',
        '名称': '宫·糖玉',
        '价格': '5800',
        '数量': '1',
        '备注': '和田糖玉珠链LW1407B2901H/和田糖祥云柱W1510B1024H/和田糖平安扣W1510A15026H/南红桶珠/战国红配珠/南红小珠/铜片',
    },
    {
        '货号': 'D17030037H',
        '扫描码': 'FSH0017',
        '名称': '宫·祥兽',
        '价格': '15000',
        '数量': '1',
        '备注': '和田籽料祥兽W1601B50038H/和田玉珠链44颗LW1407A157013H/和田小散珠14颗/寿山石/南红等配珠',
        '状态': '2018.1.10已售'
    },
    {
        '货号': 'D17030038H',
        '扫描码': 'FSH0003',
        '名称': '沁蓝',
        '价格': '1800',
        '数量': '1',
        '备注': '和田玉大镂空珠1个W1509A1201H/寿山石/绿松石/星月菩提/项圈',
    },
    {
        '货号': 'D17030039H',
        '扫描码': 'FSH0004',
        '名称': '玛雅',
        '价格': '1600',
        '数量': '1',
        '备注': '珊瑚玉平安扣L1412A6002/仿天珠玛瑙/和田玉随形珠2颗/橄榄石/金丝楠木',
    },
    {
        '货号': 'D17030040H',
        '扫描码': 'FSH0005',
        '名称': '玄黄',
        '价格': '2800',
        '数量': '1',
        '备注': '和田糖玉大镂空珠W1509A1201H/20mm珊瑚玉珠4颗S1412B60012/绿松石桶珠、腰珠/朱砂/战国红',
    },
    {'货号': 'D17030041H', '扫描码': 'FSH0006', '名称': '花影', '价格': '3200', '数量': '1', '备注': '玉兰花布袋环毛衣链PW1403A75002/和田玉转运珠',},
    {
        '货号': 'D17030042H',
        '扫描码': 'FSH0000',
        '名称': '渡',
        '价格': '6000',
        '数量': '1',
        '备注': '碧玉佛柱W1511B8002B/崖柏小珠/和田玉柱/南红/珐琅',
    },
    {'货号': 'D17030043H', '扫描码': 'FSH0007', '名称': '极光', '价格': '850', '数量': '1', '备注': '天眼玛瑙鼓珠W1605A5003M/水晶',},
    {
        '货号': 'D17030044H',
        '扫描码': 'FSH0025',
        '名称': '守护·白虎',
        '价格': '18000',
        '数量': '1',
        '备注': '俄料瑞兽把件G1411C30105H/2A7mm砗磲108颗W1608B1008CQ/3A16mm砗磲1颗W1608B2013CQ/玉髓平安扣',
    },
    {
        '货号': 'D17030045H',
        '扫描码': 'FSH0026',
        '名称': '曼珠沙华4',
        '价格': '3800',
        '数量': '1',
        '备注': '红珊瑚毛球W1608A9004S/9mm白珊瑚108颗W1608A8010S/琉璃桶珠1颗/和田玉珠5mm1颗',
    },
    {
        '货号': 'D17030046H',
        '扫描码': 'FSH0027',
        '名称': '绿野仙踪',
        '价格': '3400',
        '数量': '1',
        '备注': '孔雀石水滴形W1605A15003K/和田玉镂空珠L1408Q1060016H/8mm玉化砗磲58颗W1608B3014CQ/孔雀石2颗/白水晶',
    },
    {
        '货号': 'D17030047H',
        '扫描码': 'FSH0008',
        '名称': '盈昃',
        '价格': '4800',
        '数量': '1',
        '备注': '籽料蘑菇W1601B40055H/橙色石榴石L1408A22009C/L1408A22008C/戈壁玛瑙随形珠/缠丝玛瑙/和田玉柱2个/12mm全糖珠1颗/珍珠异形小珠/黄铜配珠',
    },
    {
        '货号': 'D17030048H',
        '扫描码': 'FSH0028',
        '名称': '曼陀罗华2',
        '价格': '6800',
        '数量': '1',
        '备注': '白珊瑚20颗W1608A8012S/白珊瑚37颗W1608A8008S/竹牌W1511B8006B/珐琅8.8g/景泰蓝',
    },
    {
        '货号': 'D17030049H',
        '扫描码': 'FSH0029',
        '名称': '一莲幽梦',
        '价格': '6000',
        '数量': '1',
        '备注': '和田玉一鹭莲科G1410B5089H/碧玉珠链W1509B9005B/8mm和田玉珠7颗/和田玉柱2颗/碧玉玉环/阴沉木珠',
        '状态': '2017.5.20已售'
    },
    {
        '货号': 'D17030050H',
        '扫描码': 'FSH0009',
        '名称': '流彩',
        '价格': '23000',
        '数量': '1',
        '备注': '【佛头配链】G1610C1242H/阿拉善玛瑙108颗6mmA1611097076/和田白玉三通，珊瑚玉平安扣A1611102104',
    },
    {
        '货号': 'D17030051H',
        '扫描码': 'FSH0030',
        '名称': '波罗的海',
        '价格': '3600',
        '数量': '1',
        '备注': '蜜蜡原石W1605A75006ML/珐琅/翡翠珠81颗/16mm砗磲珠2颗/8mm玉化砗磲3颗',
    },
    {
        '货号': 'D17030052H',
        '扫描码': 'FSH0018',
        '名称': '藏了一个秋',
        '价格': '2900',
        '数量': '1',
        '备注': '花珀挂件W1605Q738019ML-证书号：A1608014275/崖柏珠链小颗64颗、大颗1颗/珐琅',
    },
    {'货号': 'D17030053H', '扫描码': 'FSH0010', '名称': '楼兰', '价格': '3800', '数量': '1', '备注': '籽料叶子W1601B20063H/青金算盘珠2颗/珐琅',},
    {
        '货号': 'D17030054H',
        '扫描码': 'FSH0011',
        '名称': '圆满',
        '价格': '6200',
        '数量': '1',
        '备注': '蜜蜡水滴W1605A189010ML/10mm珍珠项链L1408B12001C',
    },
    {
        '货号': 'D17030055H',
        '扫描码': 'FSH0012',
        '名称': '红妆',
        '价格': '6000',
        '数量': '1',
        '备注': '阳绿如意W1506B7077F/翡翠镂空珠1颗/项圈/木珠/朱砂/泰银三通/牛骨',
        '状态': '2017.5.6已售'
    },
    {
        '货号': 'D17030056H',
        '扫描码': 'FSH0013',
        '名称': '逆流',
        '价格': '18000',
        '数量': '1',
        '备注': '和田籽料双鱼G1610B15249H星月菩提48颗W1511A8013X/和田玉珠2颗',
    },
    {'货号': 'D17030057H', '扫描码': 'FSH0031', '名称': '玄光·三合', '价格': '4200', '数量': '1', '备注': '和田玉三合柱W1510B6017H/金丝楠木珠',},
    {'货号': 'D17030058H', '扫描码': 'FSH0032', '名称': '有求必应', '价格': '980', '数量': '1', '备注': '黑曜石/金发晶S1702A26008',},
    {'货号': 'D17030059H', '扫描码': 'FSH0366', '名称': '冰心', '价格': '3800', '数量': '1', '备注': '翡翠玻璃种佛牌W1608B5335F/草莓晶/粉砗磲',},
    {
        '货号': 'D17030060H',
        '扫描码': 'FSH0391',
        '名称': '福禄寿',
        '价格': '2300',
        '数量': '1',
        '备注': '翡翠如意W1506Q155051F，如意葫芦W1506Q125104F，翡翠贝壳W1506B1105F，和田玉小籽料',
        '状态': '已拆'
    },
    {
        '货号': 'D17030061H',
        '扫描码': 'FSH0392',
        '名称': '福禄寿2',
        '价格': '2300',
        '数量': '1',
        '备注': '翡翠寿桃W1506A12011F，翡翠树叶W1507A12172F，阳绿如意W1508B3323F',
        '状态': '已拆'
    },
    {
        '货号': 'D17030062H',
        '扫描码': 'FSH0393',
        '名称': '福禄寿3',
        '价格': '2300',
        '数量': '1',
        '备注': '翡翠葫芦W1506A2154F，翡翠福牌W1506A9139F，冰如意W1506B2010F',
        '状态': '已拆'
    },
    {
        '货号': 'D17030063H',
        '扫描码': 'FSH0394',
        '名称': '锦·瑟',
        '价格': '8900',
        '数量': '1',
        '备注': '和田玉G1507B150230H,南红6mm珠L1611B6001N，L1611B6003N,翡翠平安扣G1312B3015F,珐琅8.9g,南红配珠2.3g，和田玉珠（随形）4颗',
        '状态': '已售，2017.4.15'
    },
    {
        '货号': 'D17030064H',
        '扫描码': 'FSH0395',
        '名称': '莲之魄',
        '价格': '4000',
        '数量': '1',
        '备注': '蜜蜡原石W1605A88005ML,星月菩提（圆形）W1608A17014X',
    },
    {'货号': 'D17030065H', '扫描码': 'FSH0397', '名称': '花间语', '价格': '600', '数量': '1', '备注': '南红W1605A7034N，',},
    {'货号': 'D17030066H', '扫描码': 'FSH0408', '名称': '兽面·祁谷', '价格': '3200', '数量': '1', '备注': '和田玉瑞兽G1410B5069H，和田玉镂空珠1颗',},
    {'货号': 'D17030067H', '扫描码': 'FSH0410', '名称': '曼珠沙华2', '价格': '4300', '数量': '1', '备注': '白珊瑚W1608A8011S',},
    {
        '货号': 'D17030068H',
        '扫描码': 'FSH0412',
        '名称': '寂',
        '价格': '3500',
        '数量': '1',
        '备注': '玉猪龙G1611B5275H，和田玉花型三通1个 G1610B1002H ,阿拉善回纹珠1颗S1611B8003A(12颗中的 1颗)，黑檀木珠链+其他',
    },
    {
        '货号': 'D17030069H',
        '扫描码': 'FSH0413',
        '名称': '宫·碧玉 【项圈】',
        '价格': '3200',
        '数量': '1',
        '备注': '战国红W1511A4004Z，碧玉珠5.5mmL1405B16018B（128颗中的36颗），碧玉珠9.5mmW1509B12017B(48颗中的14颗)',
    },
    {
        '货号': 'D17030070H',
        '扫描码': 'FSH0414',
        '名称': '宫·青玉【塔链】',
        '价格': '4900',
        '数量': '1',
        '备注': '和田玉珠+南红+镂空珠W1510Q833001HL',
    },
    {
        '货号': 'D17030071H',
        '扫描码': 'FSH0415',
        '名称': '曌',
        '价格': '29800',
        '数量': '1',
        '备注': '黄沁龙凤牌G1610C3244H,和田玉多色手牌W1510A25003H,和田玉镂空珠1颗，和田玉珠2颗，其他（待修复）',
        '状态': '项圈已售，余黄沁龙凤牌G1610C3244H'
    },
    {
        '货号': 'D17030072H',
        '扫描码': 'FSH0416',
        '名称': '迭·祥',
        '价格': '8800',
        '数量': '1',
        '备注': '红皮籽料龙凤W1601B50060H,红皮籽料蝴蝶W1601B50036H',
    },
    {
        '货号': 'D17030073H',
        '扫描码': 'FSH0417',
        '名称': '观心',
        '价格': '2400',
        '数量': '1',
        '备注': '星月菩提108颗W1511A15001X,和田玉糖观音三通W1510B404H，战国红平安扣W1511A8008Z',
    },
    {
        '货号': 'D17030074H',
        '扫描码': 'FSH0431',
        '名称': '锦瑟③',
        '价格': '12000',
        '数量': '1',
        '备注': '白玉观音G1312B13006H,南红6“珠L1611B6002N/L1611B6003N,翡翠平安扣G1312B3016，其他',
    },
    {
        '货号': 'D17030075H',
        '扫描码': 'FSH0432',
        '名称': '凝脂',
        '价格': '6800',
        '数量': '1',
        '备注': '俄白福寿G1504B120199H,白玉珠4.5“36颗L1405A54001H,玉化砗磲43颗W1608B3014CQ，绿松随形1.7G，其他',
    },
    {'货号': 'D17030076H', '扫描码': 'FSH0433', '名称': '无邪', '价格': '1800', '数量': '1', '备注': '小籽料+随形料+蜜蜡4.9g+其他', '状态': '宇慧拿'},
    {
        '货号': 'D17030077H',
        '扫描码': 'FSH0434',
        '名称': '弦',
        '价格': '4900',
        '数量': '1',
        '备注': '籽料辣椒G1610B6254H,和田玉平安扣一个+籽料知了+项圈和其他',
    },
    {'货号': 'D17030078H', '扫描码': 'FSH0435', '名称': '幻影', '价格': '680', '数量': '1', '备注': '黑曜石月牙+其他',},
    {
        '货号': 'D17030079H',
        '扫描码': 'FSH0436',
        '名称': '颂',
        '价格': '1800',
        '数量': '1',
        '备注': '原矿绿松3.8mmW1607A27002L(126颗)+籽料小知了+其他',
        '状态': '2017.5.21已售'
    },
    {
        '货号': 'D17030080H',
        '扫描码': 'FSH0438',
        '名称': '山海经②',
        '价格': '4800',
        '数量': '1',
        '备注': '和田蜻蜓G1402B16014H，玉化砗磲32颗W1608B3015CQ,原矿绿松1，2G,其他',
    },
    {
        '货号': 'D17030081H',
        '扫描码': 'FSH0439',
        '名称': '清平调·翡翠',
        '价格': '2580',
        '数量': '1',
        '备注': '翡翠平安牌W1507A25200F,翡翠平安扣，南红珠1颗，珐琅+其他',
    },
    {'货号': 'D17030082H', '扫描码': 'FSH0440', '名称': '蛊·石榴石', '价格': '680', '数量': '1', '备注': '石榴石4圈，盐源玛瑙回纹珠',},
    {
        '货号': 'D17030083H',
        '扫描码': 'FSH0441',
        '名称': '蛊·牛骨莲',
        '价格': '380',
        '数量': '1',
        '备注': '红玛瑙4圈，牛骨莲花',
        '状态': '2017.5.20已售'
    },
    {'货号': 'D17030084H', '扫描码': 'FSH0442', '名称': '蛊·珐琅', '价格': '380', '数量': '1', '备注': '红玛瑙4圈，珐琅',},
    {
        '货号': 'D17030085H',
        '扫描码': 'FSH0443',
        '名称': '苍璧',
        '价格': '9800',
        '数量': '1',
        '备注': '和田玉墨玉牌G1610C2055B，阿拉善回纹珠1颗S1611B8003A，崖柏大珠1颗，颈圈，其他',
        '状态': '墨玉牌已售2017.5.8'
    },
    {
        '货号': 'D17030086H',
        '扫描码': 'FSH0444',
        '名称': '弧山',
        '价格': '1600',
        '数量': '1',
        '备注': '蜜蜡原石W1605A16001ML，W1605A16004ML；沉香木原料',
        '状态': '2017.9.2已售'
    },
    {
        '货号': 'D17030087H',
        '扫描码': 'FSH0449',
        '名称': '大鱼海棠①【项圈】',
        '价格': '800',
        '数量': '1',
        '备注': '和田玉小海豚G1610A16003H，朱砂5“8颗，泰银5.24g',
    },
    {
        '货号': 'D17030088H',
        '扫描码': 'FSH0450',
        '名称': '大鱼海棠②【项圈】',
        '价格': '800',
        '数量': '1',
        '备注': '和田玉小海豚G1610A16003H，朱砂5“8颗，泰银4.50g',
    },
    {
        '货号': 'D17030089H',
        '扫描码': 'FSH0451',
        '名称': '雀青衣①【项圈】',
        '价格': '800',
        '数量': '1',
        '备注': '孔雀石方牌W1605A6001K，泰银15.43g，黑玛瑙珠子6“10颗、14”1颗、鼓珠11“4颗',
    },
    {
        '货号': 'D17030090H',
        '扫描码': 'FSH0452',
        '名称': '雀青衣②【手环】',
        '价格': '220',
        '数量': '1',
        '备注': '泰银5.47g，黑玛瑙珠子5“6颗，孔雀石珠子11”2颗',
        '状态': '2017.8.16已售'
    },
    {
        '货号': 'D17030091H',
        '扫描码': 'FSH0453',
        '名称': '泡沫之夏①',
        '价格': '1800',
        '数量': '1',
        '备注': '糖白小鱼G1507B50227H，泰银0.37g，粉晶5“4颗，玉化砗磲6”6颗、4“2颗，白水晶8”1颗、6“2颗',
        '状态': '2017.11.26已售'
    },
    {
        '货号': 'D17030092H',
        '扫描码': 'FSH0454',
        '名称': '泡沫之夏②【手环】',
        '价格': '160',
        '数量': '1',
        '备注': '泰银1.12g，粉晶5”4颗，玉化砗磲6“8颗，白水晶6”1颗',
    },
    {
        '货号': 'D17030093H',
        '扫描码': 'FSH0455',
        '名称': '妃子笑',
        '价格': '3280',
        '数量': '1',
        '备注': '比翼连枝G1504A450223H，白珊瑚三通，玉化砗磲，珊瑚平安扣A1611102105，和田玉雕花三通，S崖柏-太行山老料链72颗“FSH0347，（余38颗），白珊瑚珠子2颗',
        '状态': '2017.7.4已售'
    },
    {
        '货号': 'D17030094H',
        '扫描码': 'FSH0456',
        '名称': '玉华引',
        '价格': '800',
        '数量': '1',
        '备注': '白玉荷花（G1704A15284H),玉化砗磲三通，白珊瑚4“8颗，银珠',
        '状态': '2017.9.3已售'
    },
    {
        '货号': 'D17030095H',
        '扫描码': 'FSH0457',
        '名称': '羊羊得意',
        '价格': '3600',
        '数量': '1',
        '备注': '和田玉出人头地（D1311B5026H）、S星月菩提圆珠10mm、牛角、玉髓、散木珠',
    },
    {
        '货号': 'D17030096H',
        '扫描码': 'FSH0458',
        '名称': '墨色·锦鲤',
        '价格': '3900',
        '数量': '1',
        '备注': '鲤鱼莲花（GW1402B12018H)、和田玉镂空珠、玛瑙链',
    },
    {'货号': 'D17030097H', '扫描码': 'FSH0459', '名称': '银河', '价格': '600', '数量': '1', '备注': '泰银佩珠、珐琅佩珠、天河石、砗磲、银扣',},
    {
        '货号': 'D17030098H',
        '扫描码': 'FSH0460',
        '名称': '战八方',
        '价格': '280',
        '数量': '1',
        '备注': '朱砂圆珠、雕刻珠、桶珠、杂石',
        '状态': '2017.11.11已售'
    },
    {'货号': 'D17030099H', '扫描码': 'FSH0461', '名称': '翎羽', '价格': '3300', '数量': '1', '备注': '蜜蜡（W1605A112008ML）',},
    {
        '货号': 'D17030100H',
        '扫描码': 'FSH0462',
        '名称': '龙章凤彩',
        '价格': '16000',
        '数量': '1',
        '备注': '黄沁龙凤牌G1610C3244H、绿松长链4mm深蓝，加顶珠128颗',
    },
    {
        '货号': 'D17030101H',
        '扫描码': 'FSH0463',
        '名称': '静夜花韵',
        '价格': '1200',
        '数量': '1',
        '备注': '红珊瑚毛球W1608A6005S、和田玉镂空珠、战国红圆柱隔片、砭石',
    },
    {'货号': 'D17030102H', '扫描码': 'FSH0464', '名称': '三生石', '价格': '3600', '数量': '1', '备注': '金珀W1605A13900ML、和田玉佩珠若干',},
    {'货号': 'D17030103H', '名称': '珐琅项圈', '价格': '600', '数量': '1', '备注': '珐琅锁形挂坠',},
    {'货号': 'D17030104H', '名称': '花中君子', '价格': '3800', '数量': '1', '备注': '荷花连年G1410B5078H、 单独的链子1500元',},
    {'货号': 'D17030105H', '名称': '阴阳太极', '价格': '32000', '数量': '1', '备注': '籽料双鱼戏水W1509C8008H  全糖小平安扣',},
    {'货号': 'D17030106H', '名称': '游鱼', '价格': '6680', '数量': '1', '备注': '平安鼓珠W1605A35006N 蜜蜡8mm/84颗L1712—222006M',},
    {'货号': 'D17030107H', '名称': '不凡', '价格': '6780', '数量': '1', '备注': '蜜蜡8mm/90颗L1712—222007M  S原矿绿松石圆柱6颗 泰银镂空珠4颗',},
    {'货号': 'D17030108H', '名称': '渔', '价格': '3900', '数量': '1', '备注': '双鱼戏水G1405B9018H/和田玉小海豚一对G1610A16003H',},
    {'货号': 'D17030109H', '名称': '千红', '价格': '3920', '数量': '1', '备注': '盐源花G1611B12003YY/2颗摩根石/1颗草莓晶/40颗水草玛瑙',},
    {'货号': 'D17030110H', '名称': '忆·南红', '价格': '1690', '数量': '1', '备注': '南红椭圆W1605A35007N/S原矿绿松石圆柱2个',},
    {'货号': 'D17030111H', '价格': '2800', '数量': '1', '备注': '双鱼戏水G1410B5083H/沉香水滴长链  陈致怡作品',},
    {'货号': 'D17030112H', '价格': '1600', '数量': '1', '备注': '翡翠平安扣G1312B3029F  王鑫宇作品',},
    {'货号': 'D17030113H', '价格': '12000', '数量': '1', '备注': '阳绿平安扣W1508C2293F  随型和田玉珠4颗',},
    {'货号': 'D17030114H', '名称': '灵鹊兆喜', '价格': '1600', '数量': '1', '备注': '阿拉善玛瑙G1704B5009A/和田玉镂空珠1颗',},

];

MongoClient.connect(url, function (err, d) {
    if (err) throw err;
    console.log('数据库已创建!');
    db = d.db('data');
    for (item of t) {
        item.条码号= item.扫描码
        item._id= item.扫描码
        delete item.扫描码
        db.collection('sjk').insertOne(item);
    }
});