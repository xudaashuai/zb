<template>
    <Card class="card">
        <Form ref="formInput" :model="formInput" inline>
            <FormItem prop="名称">
                <Input placeholder="名称" type="text" v-model.upper="formInput.名称"></Input>
            </FormItem>
            <FormItem prop="条码号">
                <Input placeholder="条码号" type="text" v-model="formInput.条码号"></Input>
            </FormItem>
            <FormItem prop="证书号">
                <Input placeholder="证书号" type="text" v-model="formInput.证书号"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="search">查找</Button>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="resetSearch">重置</Button>
            </FormItem>
        </Form>
        <Tabs v-model="type" type="card" v-if="path === 'sp'">
            <TabPane label="全部" name="全部"></TabPane>
            <TabPane v-for="item in mType" :key="item" :label="item" :name="item"></TabPane>
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
                 :column-cell-class-name="columnCellClass"
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
                    条码号: '',
                    证书号: '',
                    状态: ''
                }, form: {
                    名称: '',
                    条码号: '',
                    证书号: '',
                    状态: ''
                },
                type:'',
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
                        条码号: '',
                        证书号: '',
                        状态: ''
                    };
            }, columnCellClass (rowIndex, columnName, rowData) {
                if (rowData.货号) {
                    if (rowData.货号[0] === 'w' || rowData.货号[0] === 'W') {
                        return 'w-class';
                    }
                }

            },
            search () {
                let that = this;
                Object.keys(this.formInput).map(function (key, index) {
                    that.$set(that.form, key, that.formInput[key].toUpperCase());
                });
            }
        },
        beforeRouteEnter (to, from, next) {
            console.log(to);
            next();
        },
        beforeRouteUpdate (to, from, next) {
            console.log(to);
            this.path = to.name;
            console.log(this.path)
            next();
        },
        props: {
        },
        computed: {
            columns () {
                return this.$store.getters.columns[this.$route.name];
            },
            path(){
              return this.$route.name
            },
            ...mapState({
                mType: state => state.zb.mType,
                uType: state => state.zb.uType,
                show: state => state.app.show
            }),
            data1 () {
                let result = this.$store.state.zb.item.filter((item) => item.type === this.$route.name).slice(0,300);
                return result.filter((item) => {
                        for (let key in this.form) {
                            try {
                                if (item[key].indexOf(this.form[key]) === -1) {
                                    return false;
                                }
                            }catch (e){
                                console.log(key,item,e,)
                            }
                        }
                        return true;
                    }
                );
            },
            data () {
                return this.data1.filter(item=>this.type==='全部'&&item.材质.indexOf(this.type)>-1)
            },
            ...mapState({
                show: (state) => state.app.show
            })
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
        }
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
    .w-class{
        background-color: #4e9;
        color:#fff;
    }
    .ivu-tabs-bar{
        margin-bottom: 0;
    }
    .ivu-form-item{
        margin:10px;
    }
</style>
