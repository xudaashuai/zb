<template>
    <Form :model="form" ref="form" :label-width="80">

        <FormItem label="名称" prop="名称" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.名称"></Input>
        </FormItem>
        <FormItem label="重量" prop="重量" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model="form.重量"></Input>
        </FormItem>
        <FormItem label="进货日期" prop="进货日期" :rules="{type:'date',required: true, message: '不能为空哦', trigger: 'blur'}">
            <DatePicker type="date" v-model="form.进货日期"></DatePicker>
        </FormItem>
        <FormItem label="克价" prop="克价" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
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
                    path: 'yl',
                    名称: '',
                    重量: '',
                    进货价: '',
                    进货日期: new Date(),
                    克价: '',
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
                        this.form._id = this.form.名称;
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
