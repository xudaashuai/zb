<template>
    <Form ref="form" :model="form" :label-width="80">
        <FormItem label="名称" prop="名称" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.名称"></Input>
        </FormItem>
        <FormItem label="条码号" prop="条码号" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.条码号"></Input>
        </FormItem>
        <FormItem label="证书号" prop="证书号" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.证书号"></Input>
        </FormItem>
        <FormItem label="标价" prop="标价" :rules="{type:'number',required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="number" v-model.number="form.标价"></Input>
        </FormItem>
        <FormItem label="设计人" prop="设计人" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="text" v-model="form.设计人"></Input>
        </FormItem>
        <FormItem label="设计理念" prop="设计理念" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="textarea" v-model="form.设计理念"></Input>
        </FormItem>
        <FormItem label="备注" prop="备注" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
            <Input type="textarea" v-model="form.设计理念"></Input>
        </FormItem>
        <FormItem>
            <div class="demo-upload-list" v-for="item in uploadList">
                <template v-if="item.status === 'finished'">
                    <img :src="item.url">
                    <div class="demo-upload-list-cover">
                        <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                        <Icon type="ios-trash-outline" @click.native="handleFileRemove(item)"></Icon>
                    </div>
                </template>
                <template v-else>
                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                </template>
            </div>
            <Upload
                    ref="upload"
                    :show-upload-list="false"
                    :default-file-list="defaultList"
                    :on-success="handleSuccess"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    :before-upload="handleBeforeUpload"
                    multiple
                    type="drag"
                    action="http://58.33.49.46:672/v1/upload"
                    style="display: inline-block;width:58px;">
                <div style="width: 58px;height:58px;line-height: 58px;">
                    <Icon type="camera" size="20"></Icon>
                </div>
            </Upload>
            <Modal title="View Image" v-model="visible">
                <img :src="'http://ww2.sinaimg.cn/large/' + imgName" v-if="visible" style="width: 100%">
            </Modal>
        </FormItem>
        <FormItem
                v-for="(item, index) in form.组成"
                :key="index"
                :label="'组成 ' + (index+1)"
                :prop="'组成.' + index "
                :rules="{required: true, message: '组成 ' + (index+1) +'不能为空', trigger: 'blur'}">
            <Row>
                <Col span="20">
                <Select v-model="form.组成[index]" filterable>
                    <Option v-for="item,index in data" :value="item.条码号" :key="item.条码号"><span>{{item.名称}}</span>
                        <span style="float:right;color:#ccc">{{item.条码号}}</span>
                    </Option>
                </Select>
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
            <Button type="primary" @click="handleSubmit('form')">入库</Button>
            <Button type="ghost" @click="handleReset('form')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        data () {
            return {
                index: 1,
                form: {
                    path: 'sjk',
                    组成: [],
                    证书号: '',
                    条码号: '',
                    名称: '',
                    标价: '',
                    主石: '',
                    设计人: '',
                    设计理念: '',
                    备注:''
                },
                defaultList: [],
                imgName: '',
                visible: false,
                uploadList: []
            };
        },
        computed: {

            ...mapState({
                data: (state) => state.zb.sp.concat(state.zb.xql).concat(state.zb.sjk),
                otherData: (state) => state.zb.pj.concat(state.zb.yl).filter((item) => item.状态 === '在库'),
            }),
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.info('正在添加');
                        this.form._id = this.form.条码号;
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
                this.index++;
                this.form.组成.push('');
            },
            handleRemove (index) {
                this.form.组成.splice(index, 1);
            },
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleFileRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                console.log(res);
                file.url = 'http://ww2.sinaimg.cn/large/' + res.wbpid;
                file.name = res.wbpid;
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不对哦',
                    desc: file.name + '的格式不对，请选择 jpg/png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '文件大小限制',
                    desc: file.name + '太大了，不能超过2M哦.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            }
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
        }
    };
</script>
<style>
    .demo-upload-list {
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
    }

    .demo-upload-list img {
        width: 100%;
        height: 100%;
    }

    .demo-upload-list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .6);
    }

    .demo-upload-list:hover .demo-upload-list-cover {
        display: block;
    }

    .demo-upload-list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
