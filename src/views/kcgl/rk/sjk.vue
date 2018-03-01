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
        <FormItem label="主石" prop="主石" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.主石"></Input>
        </FormItem>
        <FormItem
                v-for="(item, index) in form.配石"
                :key="index"
                :label="'配石 ' + (index+1)"
                :prop="'配石.' + index + '.value'"
                :rules="{required: true, message: '配石 ' + (index+1) +'不能为空', trigger: 'blur'}">
            <Row>
                <Col span="20">
                <Input type="text" v-model="item.value" placeholder="输入配石信息"></Input>
                </Col>
                <Col span="3" offset="1">
                <Button type="ghost" @click="handleRemove(index)">删除</Button>
                </Col>
            </Row>
        </FormItem>
        <FormItem>
            <Row>
                <Col span="12">
                <Button type="dashed" long @click="handleAdd" icon="plus-round">添加 配石</Button>
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
                    配石: [
                        {
                            value: '',
                            index: 1,
                            status: 1
                        }
                    ],
                    货号: '',
                    证书号: '',
                    条码号: '',
                    名称: '',
                    进货日期: new Date(),
                    标价: '',
                    主石:''
                }
            };
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                });
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.index++;
                this.form.配石.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleRemove (index) {
                this.form.配石.splice(index,1);
            }
        }
    };
</script>
