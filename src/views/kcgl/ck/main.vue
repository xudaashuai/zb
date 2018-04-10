<template>
    <Card>
        <Form :model="form" ref="form" :label-width="80">
            <FormItem label="出库原因" prop="出库原因" :rules="{required: true, message: '不能为空哦', trigger: 'change'}">
                <Select v-model="form.出库原因">
                    <Option v-for="item in ckType" :key="item" :value="item">{{item}}</Option>
                </Select>
            </FormItem>
            <FormItem label="领用人" prop="领用人"
                      :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
                <Input type="text" v-model="form.领用人"></Input>
            </FormItem>
            <FormItem label="物品类别" prop="物品类别" :rules="{required: true, message: '不能为空哦', trigger: 'change'}">
                <Select v-model="form.物品类别">
                    <Option v-for="item in wpType" :key="item" :value="item">{{item}}</Option>
                </Select>
            </FormItem>

            <FormItem v-if="form.物品类别==='商品'" label="物品" prop="物品"
                      :rules="{type:'array',required: true, message: '不能为空哦', trigger: 'change'}">
                <Select v-model="form.物品" filterable multiple>
                    <Option v-for="item,index in data" :value="item.条码号" :key="item.条码号"><span>{{item.名称}}</span>
                        <span style="float:right;color:#ccc">{{item.条码号}}</span>
                    </Option>
                </Select>
            </FormItem>
            <FormItem v-if="form.物品类别==='配件或原料'" label="物品" prop="物品"
                      :rules="{required: true, message: '不能为空哦', trigger: 'change'}">
                <Select v-model="form.物品" filterable>
                    <Option v-for="item,index in otherData" :value="item.名称" :key="item.名称"><span>{{item.名称}}</span>
                        <span style="float:right;color:#ccc">{{item.重量}}g</span>
                    </Option>
                </Select>
            </FormItem>
            <FormItem v-if="form.物品类别!=='商品'" label="重量" prop="重量"
                      :rules="{type:'number',required: true, message: '不能为空哦', trigger: 'blur'}">
                <Input type="number" v-model.number="form.重量"></Input>
            </FormItem>
            <FormItem v-if="form.出库原因==='出售'" label="售价" prop="售价"
                      :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
                <Input type="number" v-model.number="form.售价"></Input>
            </FormItem>
            <FormItem v-if="form.出库原因==='外出展览'" label="归还日期" prop="归还日期">
                <DatePicker placement="bottom-end" placeholder="选择日期" v-model="归还日期"
                            style="width: 200px"></DatePicker>
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
    import _ from 'underscore';

    export default {
        data () {
            return {
                type: -1,
                form: {
                    path: 'ck',
                    物品类别: '',
                    出库原因: '',
                    重量: 0,
                    售价: 0,
                    物品: [],
                    领用人: '',
                },
                归还日期:new Date(),
                ckType: [
                    '出售',
                    '制作领用',
                    '外出展览',
                    '其他',
                ],
                wpType: [
                    '配件或原料',
                    '商品',
                ]
            };
        },
        computed: {
            ...mapState({
                mType: state => state.zb.mType,
                uType: state => state.zb.uType,
            }),
            ...mapState({
                otherData: (state) => state.zb.pjAll.concat(state.zb.ylAll).filter((item) => item.状态 === '在库'),
            }),
            data () {
                return this.$store.getters.allData.filter((item) => item.状态 === '在库');
            },
            selectItem () {
                let t = _.findWhere(this.otherData, {名称: this.form.物品});
                if (t) {
                    return Number.parseInt(t.重量);
                } else {
                    return 9999999999;
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                        if (valid) {
                            if (this.form.物品类别 === '配件或原料' && (this.form.重量 > this.selectItem || this.form.重量 <= 0)) {
                                this.$Message.error('重量不对哦');
                            } else {
                                this.$Message.info('正在出库');
                                this.form.归还日期 = this.归还日期.toLocaleDateString().replace(/\//g,'-',)
                                console.log(this.form)
                                this.form.出库日期 = new Date().toLocaleDateString() + new Date().toLocaleTimeString();
                                this.$store.dispatch('ck', this.form).then((res) => {
                                    console.log(res);
                                    this.$Message.success('出库成功!');
                                }, (err) => {
                                    this.$Message.error(err);
                                });
                            }
                        }
                        else {
                            this.$Message.error('表单信息不完整');
                        }
                    }
                );
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    };
</script>
<style lang="less">

</style>
