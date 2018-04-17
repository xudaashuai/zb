<template>
    <Card class="card">
        <Modal v-model="modal">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="information-circled"></Icon>
                <span>添加用户</span>
            </p>
            <div style="">
                <Form ref="modelInput" :model="modelInput" :label-width="80">
                    <FormItem label="名称" :rules="{required: true, message: '不能为空哦', trigger: 'blur'}">
                        <Input type="text" v-model="modelInput.名称" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="生日">
                        <DatePicker v-model="modelInput.生日"></DatePicker>
                    </FormItem>
                    <FormItem label="备注">
                        <Input type="textarea" v-model="modelInput.备注" placeholder=""></Input>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer">
                <Button type="primary" size="large" long @click="submit('modelInput')">确定</Button>
            </div>
        </Modal>
        <Form ref="formInput" :model="formInput" inline>
            <FormItem prop="名称">
                <Input placeholder="名称" type="text" v-model.upper="formInput.名称"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="search">查找</Button>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="resetSearch">重置</Button>
            </FormItem>
            <FormItem>
                <Button type="info" long @click="addClient">添加客户</Button>
            </FormItem>
        </Form>
        <Tabs v-model="type" type="card" v-if="st">
            <TabPane label="全部" name="全部"></TabPane>
            <TabPane v-for="item in uType" :key="item" :label="item" :name="item"></TabPane>
        </Tabs>
        <v-table v-if='show' ref="table" highlight-row stripe class="table" border :columns="columns"
                 is-vertical-resize
                 style="width:100%"
                 is-horizontal-resize
                 :vertical-resize-offset='30'
                 column-width-drag
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 odd-bg-color="#fafafa"
                 :table-data="data"></v-table>
    </Card>
</template>
<script>
    import {mapGetters, mapState} from 'vuex';

    export default {

        data: function () {
            return {
                formInput: {
                    名称: '',
                    生日: null,
                    备注: ''
                }, form: {
                    名称: '',
                    生日: null,
                    备注: ''
                }, modelInput: {
                    名称: '',
                    生日: new Date(),
                    备注: ''
                },
                modal: false
            };
        },
        mounted () {
        },
        created () {
            /*
            this.$store.dispatch('get', {path: 'sp'}).then(
                () => this.$Message.success('加载数据成功'),
                () => this.$Message.error('加载数据失败')
            );*/
        },
        methods: {
            resetSearch () {
                this.formInput =
                    this.form = {
                        名称: '',
                        生日: null,
                        备注: ''
                    };
            },
            addClient () {
                this.modal = true;
            },
            search () {
                let that = this;
                Object.keys(this.formInput).map(function (key, index) {
                    that.$set(that.form, key, that.formInput[key].toUpperCase());
                });
            },
            submit (name) {
                console.log(name);
                if (this.modelInput.名称) {
                    this.$Message.info('正在执行操作');
                    this.$store.dispatch('addClient', this.modelInput).then((res) => {
                        console.log(res);
                        this.$Message.success('添加成功!');
                        this.modal = false;
                    }, (err) => {
                        this.$Message.error(err);
                    });
                }
                else {
                    this.$Message.error('输入名称哦');
                }
            },
        },
        computed: {
            columns () {
                return this.$store.getters.columns['client'];
            },
            path () {
                return this.$route.name;
            },
            ...mapState({
                show: state => state.app.show
            }),
            data1 () {
                let result = {};
                result = this.$store.state.zb.client;
                return result.filter((item) => {
                        for (let key in this.form) {
                            if (this.form[key]) {
                                try {
                                    if (item[key].indexOf(this.form[key]) === -1) {
                                        return false;
                                    }
                                } catch (e) {
                                    console.log(key, item, e,);
                                }
                            }
                        }
                        return true;
                    }
                );
            },
            data () {
                return this.data1;
            },
            ...mapState({
                show: (state) => state.app.show
            }),
        },
        mounted () {
        },
        created () {
            console.log(this.$route);
            /*
            this.$store.dispatch('get', {path: this.path}).then(
                () => this.$Message.success('加载数据成功'),
                () => this.$Message.error('加载数据失败')
            );
            */
        },

    };
</script>
<style>
    .card {
        height: 100%;
        width: auto;
    }

    .search-button {
        position: fixed;
        right: 30px
    }

    .w-class {
        background-color: #4e9;
        color: #fff;
    }

    .ivu-tabs-bar {
        margin-bottom: 0;
    }

    .ivu-form-item {
        margin: 10px;
    }
</style>
