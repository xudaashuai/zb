<template>
    <Form ref="form" :model="form" :label-width="80">
        <FormItem label="名称" prop="名称" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.名称"></Input>
        </FormItem>
        <FormItem label="条码号" prop="条码号" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.条码号"></Input>
        </FormItem>
        <FormItem label="标价" prop="标价" :rules="{type:'number',required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model.number="form.标价"></Input>
        </FormItem>

        <FormItem  label="图片">
            <image-upload v-model="uploadList">

            </image-upload>
        </FormItem>
        <FormItem label="备注" prop="备注">
            <Input type="textarea" v-model="form.备注"></Input>
        </FormItem>
        <!--
            <Row>
                <Col span="12">
                <FormItem label="主石" prop="主石.名称" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
                    <Input type="text" v-model="form.主石.名称"></Input>
                </FormItem>
                </Col>

                <Col span="8">
                <FormItem label="重量" prop="主石.重量"
                          :rules="{type:'number',required: true, message: '不能为空哦', trigger: 'blur'}">
                    <Input type="text" v-model.number="form.主石.重量" placeholder="重量"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row
                    v-for="(item, index) in form.配石" :key="index">
                <Col span="12">
                <FormItem
                        :key="index"
                        :label="'配石 ' + (index+1)"
                        :prop="'配石.' + index +'.名称'"
                        :rules="{required: true, message: '配石 ' + (index+1) +'不能为空', trigger: 'blur'}">

                    <Input type="text" v-model="item.名称" placeholder="输入配石信息"></Input>

                </FormItem>
                </Col>

                <Col span="8">
                <FormItem label="重量" :prop="'配石.' + index +'.重量'"
                          :rules="{type:'number',required: true, message: '不能为空哦', trigger: 'blur'}">
                    <Input type="text" v-model.number="item.重量" placeholder="重量"></Input>
                </FormItem>
                </Col>

                <Col span="3" offset="1">
                <Button type="ghost" @click="handleRemove(index)">删除</Button>
                </Col>
            </Row>
            <FormItem>
                <Row>
                    <Col span="12">
                    <Button type="dashed" long @click="handleAdd" icon="plus-round">添加配石</Button>
                    </Col>
                </Row>
            </FormItem>
        -->
        <FormItem>
            <Button type="primary" @click="handleSubmit('form')">入库</Button>
            <Button type="ghost" @click="handleReset('form')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                form: {
                    path: 'xql',
                    配石: [],
                    条码号: '',
                    名称: '',
                    标价: '',
                    主石: {},
                    备注:''
                },
                uploadList: []
            };
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.info('正在添加');
                        this.form._id = this.form.条码号;                        this.form.图片 = this.$_.map(this.uploadList, (item) => item.url);
                        this.form.图片 = this.$_.map(this.uploadList, (item) => item.url);
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
            handleAdd () {
                this.form.配石.push({
                    重量: '',
                    名称: '',
                });
            },
            handleRemove (index) {
                this.form.配石.splice(index, 1);
            }
        }
    };
</script>
