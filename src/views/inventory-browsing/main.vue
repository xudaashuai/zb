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
                    条码号: '',
                    证书号: '',
                    状态: ''
                }, form: {
                    名称: '',
                    条码号: '',
                    证书号: '',
                    状态: ''
                }
            };
        },
        mounted () {
        },
        created () {
            /*this.$store.dispatch('get', {path: 'sp'}).then(
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
            next(vm => {
                vm.path = to.name;
            });
        },
        beforeRouteUpdate (to, from, next) {
            console.log(to);
            next();
        },
        props: {
            path: {
                default: 'sp'
            }
        },
        computed: {
            columns () {
                return this.$store.getters.columns[this.path];
            },
            ...mapState({
                mType: state => state.zb.mType,
                uType: state => state.zb.uType,
                show: state => state.app.show
            }),
            data () {
                let result = this.$store.state.zb.item.filter((item) => item.type === this.path);
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
<style scoped>
    .card {
        height: 100%;
        width: auto;
    }

    .search-button {
        position: fixed;
        right: 30px
    }
</style>
