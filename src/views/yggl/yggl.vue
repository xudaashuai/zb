<template>
    <div>

        <Card>
            <center>
                <Form ref="form" :model="form" :rules="rule" inline>
                    <FormItem prop="username">
                        <Input type="text" v-model="form.username" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="text" v-model="form.password" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="access">
                        <Select v-model="form.access" style="width:200px">
                            <Option v-for="item,index in accessList" :value="index" :key="index">{{ item}}</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('form')">添加</Button>
                    </FormItem>
                </Form>
            </center>
        </Card>
        <Card v-for="item in users" :key="item.username">
            <p slot="title">
                员工
            </p>
            <a href="#" slot="extra" @click.prevent="deleteUser(item._id,item.username)">
                <Icon type="close"></Icon>
                删除此员工
            </a>
            <p>用户名：{{item.username}}</p>
            <p> 密码：{{item.password}}</p>
            <p> 权限：{{accessList[item.access]}}</p>
        </Card>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'yggl',
        data () {
            return {
                form: {
                    path: 'user',
                    username: '',
                    password: '',
                    access:0
                },
                accessList:[
                    '员工',
                    '店长',
                ],
                rule: {
                    username: [
                        {required: true, message: '输入用户名呀', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '输入密码呀', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 6,
                            message: '密码要大于六位哦',
                            trigger: 'blur'
                        }
                    ]
                }
            };
        },
        computed: {
            ...mapState({
                users: (state) => state.zb.user.filter(user => user.username !== 'admin')
            })
        },
        created () {
            this.$store.dispatch('get', {path: 'user'}).then(
                () => this.$Message.success('加载数据成功'),
                () => this.$Message.error('加载数据失败')
            );
        }, methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.form._id = this.form.username;
                        this.$store.dispatch('add', this.form).then(result => {
                            this.$Message.success('添加成功');
                            this.$store.dispatch('get', {path: 'user'});
                        }, err => {
                            this.$Message.error(err);
                        });
                    } else {
                        this.$Message.error('表单填完哦');
                    }
                });
            },
            deleteUser (id, username) {
                this.$store.dispatch('remove', {path: 'user', _id: id, username: username}).then(result => {
                    this.$Message.success('删除成功');
                    this.$store.dispatch('get', {path: 'user'});
                }, err => this.$Message.error(err));
            }
        }
    };
</script>

<style scoped>

</style>
