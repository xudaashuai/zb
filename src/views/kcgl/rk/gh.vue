<template>
    <Card>
        <Form :model="form" ref="form" :label-width="80">
            <FormItem label="物品" prop="物品"
                      :rules="{type:'array',required: true, message: '不能为空哦', trigger: 'change'}">
                <Select v-model="form.物品" multiple>
                    <Option v-for="item,index in data" :value="item.条码号" :key="item.条码号"><span>{{item.名称}}</span>
                        <span style="float:right;color:#ccc">{{item.条码号}}</span>
                    </Option>
                </Select>
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
                    物品: [],
                    日期: new Date(),
                },
            };
        },
        computed: {
            ...mapState({
                mType: state => state.zb.mType,
                uType: state => state.zb.uType,
            }),
            ...mapState({
                data: (state) => state.zb.sp.concat(state.zb.xql).concat(state.zb.sjk).filter((item) => item.状态 !== '在库'),
            }),
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
                                this.form._id = this.form.货号;
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
