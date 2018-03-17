<template>
    <Form :model="form" ref="form" :label-width="80">
        <FormItem label="名称" prop="名称" :rules="{required: true, message: '不能为空哦', trigger: 'change'}">
            <AutoComplete
                    v-model="form.名称"
                    @on-search="handleSearch">
                <Option v-for="item in searchData" :value="item.名称" :key="item.名称"><span>{{item.名称}}</span>
                    <span style="float:right;color:#ccc">{{item.重量}}g</span></Option>
            </AutoComplete>
        </FormItem>
        <FormItem label="重量" prop="重量" :rules="{type:'number',required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model.number="form.重量"></Input>
        </FormItem>
        <FormItem label="进货价" prop="进货价" :rules="{type:'number',required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model.number="form.进货价"></Input>
        </FormItem>
        <FormItem label="标价" prop="标价" :rules="{type:'number',required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model.number="form.标价"></Input>
        </FormItem>
        <FormItem label="图片">
            <image-upload v-model="uploadList">

            </image-upload>
        </FormItem>
        <FormItem label="备注" prop="备注">
            <Input type="textarea" v-model="form.备注"></Input>
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
                    path: 'pj',
                    名称: '',
                    重量: '',
                    进货价: '',
                    标价: '',
                    备注:'',
                },
                searchData: [],
                uploadList:[]
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
                    if (valid) {                        this.form.图片 = this.$_.map(this.uploadList, (item) => item.url);

                        this.$Message.info('正在添加');
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
            },
            handleSearch (value) {
                return this.searchData = this.$store.state.zb.pjAll.filter((item) => item.名称.indexOf(value) > -1);
            }
        }
    };
</script>
<style lang="less">

</style>
