<template>
    <Card>
        <Tabs v-model="label">
            <TabPane label="商品" name="商品">
                <sp v-if="label==='商品'"></sp>
            </TabPane>
            <TabPane label="镶嵌类" name="镶嵌类">
                <xql v-if="label==='镶嵌类'"></xql>
            </TabPane>
            <TabPane label="设计款" name="设计款">
                <sp v-if="label==='设计款'"></sp>
            </TabPane>
            <TabPane label="配件" name="配件">
                <sp v-if="label==='配件'"></sp>
            </TabPane>
            <TabPane label="原料" name="原料">
                <sp v-if="label==='原料'"></sp>
            </TabPane>
        </Tabs>
    </Card>
</template>
<script>
    import {mapState} from 'vuex';
    import sp from './sp.vue';
    import xql from './xql.vue';

    export default {
        data () {
            return {
                type: -1,
                formValidate: {
                    货号: {
                        value: '',
                        type: 'text',
                    },
                    证书号: {
                        value: '',
                        type: 'text',
                    },
                    条码号: {
                        value: '',
                        type: 'text',
                    },
                    名称: {
                        value: '',
                        type: 'text',
                    },
                    材质: {
                        value: '',
                        type: 'select',
                        data: this.$store.state.zb.mType
                    },
                    类别: {
                        value: '',
                        type: 'select',
                        data: this.$store.state.zb.uType
                    },
                    重量: {
                        value: '',
                        type: 'text',
                    },
                    进货价: {
                        value: '',
                        type: 'text',
                        data: this.uType
                    },
                    进货日期: {
                        value: '',
                        type: 'date',
                        data: this.uType
                    },
                    标价: {
                        value: '',
                        type: 'text',
                    },
                },
                form: {
                    货号: '',
                    证书号: '',
                    条码号: '',
                    名称: '',
                    材质: '',
                    类别: '',
                    重量: '',
                    进货价: '',
                    进货日期: new Date(),
                    标价: '',
                    规格: '',
                    数量: '',
                    克价: ''

                },
                ruleValidate: {
                    货号: [
                        {required: true, message: '不能为空哦', trigger: 'blur'}
                    ],
                    证书号: [
                        {required: true, message: '不能为空哦', trigger: 'blur'}
                    ],
                    条码号: [
                        {required: true, message: '不能为空哦', trigger: 'blur'}
                    ],
                    名称: [
                        {required: true, message: '不能为空哦', trigger: 'blur'}
                    ],
                    材质: [
                        {required: true, message: '不能为空哦', trigger: 'change'}
                    ],
                    类别: [
                        {required: true, message: '不能为空哦', trigger: 'change'}
                    ],
                    重量: [
                        {required: true, message: '不能为空哦', trigger: 'blur'}
                    ],
                    进货价: [
                        {required: true, message: '不能为空哦', trigger: 'blur'},
                    ],
                    进货日期: [
                        {required: true, type: 'date', message: '不能为空哦', trigger: 'change'}
                    ],
                    标价: [
                        {required: true, message: '不能为空哦', trigger: 'blur'},
                    ],
                },
                label:'商品'
            };
        },
        computed: {
            ...mapState({
                mType: state => state.zb.mType,
                uType: state => state.zb.uType,
            }),
        },
        components: {
            sp: sp,
            xql:xql
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$http.post('/sp', form).then((res) => {
                            console.log(res);
                        });
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
