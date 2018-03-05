<template>
    <Form ref="form" :model="form" :label-width="80">
        <FormItem label="名称" prop="名称" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.名称"></Input>
        </FormItem>
        <FormItem label="货号" prop="货号" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.货号"></Input>
        </FormItem>
        <FormItem label="证书号" prop="证书号" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.证书号"></Input>
        </FormItem>
        <FormItem label="进货日期" prop="进货日期" :rules="{type: 'date',required: true, message: '不能为空哦', trigger: 'blur'}">
            <DatePicker type="date" v-model="form.进货日期"></DatePicker>
        </FormItem>
        <FormItem
                v-for="(item, index) in form.组成"
                :key="index"
                :label="'组成 ' + (index+1)"
                :prop="'组成.' + index "
                :rules="{required: true, message: '组成 ' + (index+1) +'不能为空', trigger: 'blur'}">
            <Row>
                <Col span="20">
                <Input type="text" v-model="form.组成[index]" placeholder="输入组成信息"></Input>
                </Col>
                <Col span="3" offset="1">
                <Button type="ghost" @click="handleRemove(index)">删除</Button>
                </Col>
            </Row>
        </FormItem>
        <FormItem>
            <Row>
                <Col span="12">
                <Button type="dashed" long @click="handleAdd" icon="plus-round">添加 组成</Button>
                </Col>
            </Row>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('form')">Submit</Button>
            <Button type="ghost" @click="handleReset('form')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                index: 1,
                form: {
                    path:'sjk',
                    组成: [''
                    ],
                    货号: '',
                    证书号: '',
                    条码号: '',
                    名称: '',
                    进货日期: new Date(),
                    标价: '',
                    主石: ''
                }
            };
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.info('正在添加');
                        this.form._id = this.form.货号;
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
                this.index++;
                this.form.组成.push('');
            },
            handleRemove (index) {
                this.form.组成.splice(index, 1);
            }
        }
    };
</script>
