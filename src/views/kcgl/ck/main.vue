<template>
    <Card>
        <Form :model="form" ref="form" :label-width="80">
            <FormItem label="类别" prop="类别" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
                <Select v-model="form.类别">
                    <Option v-for="item in ckType" :key="item" :value="item">{{item}}</Option>
                </Select>
            </FormItem>
            <FormItem disabled label="日期" prop="日期"
                      :rules="{type:'date',required: true, message: '不能为空哦', trigger: 'blur'}">
                <DatePicker type="date" v-model="form.日期"></DatePicker>
            </FormItem>
            <FormItem label="物品类别" prop="物品类别" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
                <Select v-model="form.物品类别">
                    <Option v-for="item in wpType" :key="item" :value="item">{{item}}</Option>
                </Select>
            </FormItem>
            <FormItem label="数量" prop="数量"
                      :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
                <Input type="number" v-model="form.数量"></Input>
            </FormItem>
            <FormItem v-if="form.物品类别==='商品'" label="条形码" prop="条形码"
                      :rules="{type:'array',required: true, message: '不能为空哦', trigger: 'blur'}">
                <Select v-model="form.条形码" filterable multiple>
                    <Option v-for="item,index in data" :value="item.条码号" :key="item.条码号"><span>{{item.名称}}</span>
                        <span style="float:right;color:#ccc">{{item.条码号}}</span>
                    </Option>
                </Select>
            </FormItem>
            <FormItem v-if="form.类别==='出售'" label="售价" prop="售价"
                      :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
                <Input type="number" v-model="form.售价"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('form')">添加</Button>
                <Button type="ghost" style="margin-left: 8px" @click="handleReset('form')">清空</Button>
            </FormItem>
        </Form>
    </Card>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        data () {
            return {
                type: -1,
                form: {
                    path: 'ck',
                    类别: '',
                    物品类别: '',
                    出库物品: '',
                    出库原因: '',
                    数量: '',
                    售价: '',
                    条形码: [],
                    日期: new Date(),
                    人员: ''
                },
                ckType: [
                    '出售',
                    '制作领用',
                    '其他',
                ],
                wpType: [
                    '原料',
                    '商品',
                    '配件'
                ]
            };
        },
        computed: {
            ...mapState({
                mType: state => state.zb.mType,
                uType: state => state.zb.uType,
            }),
            ...mapState({
                data: (state) => state.zb.sp
            })
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.info('正在出库');
                        this.form._id = this.form.货号;
                        this.$store.dispatch('ck', this.form).then((res) => {
                            console.log(res);
                            this.$Message.success('出库成功!');
                        }, (err) => {
                            this.$Message.error(err);
                        });
                    } else {
                        this.$Message.error('表单信息不完整');
                    }
                });
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    };
</script>
<style lang="less">

</style>
