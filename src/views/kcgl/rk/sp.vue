<template>
    <Form :model="form" ref="form" :label-width="80">
        <FormItem label="类别" prop="类别" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Select v-model="form.类别">
                <Option v-for="item in uType" :key="item" :value="item">{{item}}</Option>
            </Select>
        </FormItem>
        <FormItem label="材质" prop="材质" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Select v-model="form.材质">
                <Option v-for="item in mType" :key="item" :value="item">{{item}}</Option>
            </Select>
        </FormItem>
        <FormItem label="名称" prop="名称" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.名称"></Input>
        </FormItem>
        <FormItem label="条码号" prop="条码号" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.条码号"></Input>
        </FormItem>
        <FormItem label="证书号" prop="证书号" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.证书号"></Input>
        </FormItem>
        <FormItem label="重量" prop="重量" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model="form.重量"></Input>
        </FormItem>
        <FormItem label="进货价" prop="进货价" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model="form.进货价"></Input>
        </FormItem>
        <FormItem label="标价" prop="标价" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model="form.标价"></Input>
        </FormItem>
        <FormItem label="大小" prop="大小" v-if="form.类别==='手镯'"
                  :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model="form.大小"></Input>
        </FormItem>
        <FormItem label="规格" prop="规格" v-if="form.类别==='珠链'"
                  :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.规格"></Input>
        </FormItem>
        <FormItem label="数量" prop="数量" v-if="form.类别==='珠链'"
                  :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model="form.数量"></Input>
        </FormItem>
        <FormItem label="克价" prop="克价" v-if="form.类别==='珠链'"
                  :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model="form.克价"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('form')">添加</Button>
            <Button type="ghost" style="margin-left: 8px" @click="handleReset('form')">清空</Button>
        </FormItem>
    </Form>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        data () {
            return {
                type: -1,
                form: {
                    path: 'sp',
                    证书号: '',
                    条码号: '',
                    名称: '',
                    材质: '',
                    类别: '',
                    重量: '',
                    进货价: '',
                    标价: '',
                    规格: '',
                    数量: '',
                    克价: ''
                },
            };
        },
        computed: {
            ...mapState({
                mType: state => state.zb.mType,
                uType: state => state.zb.uType,
            }),
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.info('正在添加');
                        this.form._id = this.form.货号;
                        this.form.进货日期 = new Date().toLocaleDateString();
                        this.$store.dispatch('add', this.form).then((res) => {
                            console.log(res);
                            this.$Message.success('添加成功!');
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
