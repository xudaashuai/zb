<template>
    <div>
        <Form ref="formInput" :model="formInput" inline>
            <FormItem prop="类别">
                <Select v-model="formInput.类别" placeholder="类别">
                    <Option value="">全部</Option>
                    <Option v-for="item in uType" :key="item" :value="item">{{item}}</Option>
                </Select>
            </FormItem>
            <FormItem prop="名称">
                <Input placeholder="名称" type="text" v-model.upper="formInput.名称"></Input>
            </FormItem>
            <FormItem prop="条码号">
                <Input placeholder="条码号" type="text" v-model="formInput.条码号"></Input>
            </FormItem>
            <FormItem prop="证书号">
                <Input placeholder="证书号" type="text" v-model="formInput.证书号"></Input>
            </FormItem>
            <FormItem prop="状态">
                <Select v-model="formInput.状态" style="width: 100px">
                    <Option v-for="item in ['','在库','出售','制作领用','外出展览','其他']" :key="item" :value="item">
                        {{item===''?'全部':item}}
                    </Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="search">查找</Button>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="resetSearch">重置</Button>
            </FormItem>
        </Form>
        <Card class="card">
            <Tabs value="全部">
                <TabPane label="全部" name="全部">
                    <v-table v-if="show" ref="table"
                             :column-cell-class-name="columnCellClass"
                             is-vertical-resize
                             style="width:100%"
                             is-horizontal-resize
                             :vertical-resize-offset='40'
                             column-width-drag
                             row-hover-color="#eee"
                             row-click-color="#edf7ff"
                             :columns="spColumns"
                             :table-data="allData"></v-table>
                </TabPane>
                <TabPane v-for="type in mType" :label="type" :key="type" :name="type">
                    <v-table v-if="show" ref="table" is-vertical-resize
                             style="width:100%"
                             is-horizontal-resize
                             :vertical-resize-offset='40'
                             column-width-drag
                             row-hover-color="#eee"
                             row-click-color="#edf7ff"
                             :columns="spColumns"
                             odd-bg-color="#fafafa"
                             :table-data="data[type]"></v-table>
                </TabPane>
            </Tabs>
        </Card>
    </div>
</template>
<script>
    import {mapGetters, mapState} from 'vuex';

    export default {
        name:'ib-sp',
        data: function () {
            return {
                formInput: {
                    名称: '',
                    类别: '',
                    条码号: '',
                    证书号: '',
                    状态: ''
                },form: {
                    名称: '',
                    类别: '',
                    条码号: '',
                    证书号: '',
                    状态: ''
                }
            };
        },
        computed: {
            ...mapGetters(['spColumns']),
            ...mapState({
                mType: state => state.zb.mType,
                uType: state => state.zb.uType,
                show: state => state.app.show
            }),
            data: function () {
                let t = {};
                for (let i = 0; i < this.$store.state.zb.mType.length; i++) {
                    t[this.$store.state.zb.mType[i]] = this.$store.getters.typeData(this.$store.state.zb.mType[i]).filter((item) => {
                        return item.名称.indexOf(this.form.名称) > -1 && item.条码号.indexOf(this.form.条码号) > -1
                            && item.证书号.indexOf(this.form.证书号) > -1 && item.类别.indexOf(this.form.类别) > -1
                            && item.状态.indexOf(this.form.状态) > -1;
                    });
                }

                return t;
            },
            allData () {
                return this.$store.state.zb.sp.filter((item) => {
                    return item.名称.indexOf(this.form.名称) > -1 && item.条码号.indexOf(this.form.条码号) > -1
                        && item.证书号.indexOf(this.form.证书号) > -1 && item.类别.indexOf(this.form.类别) > -1
                        && item.状态.indexOf(this.form.状态) > -1;
                });
            }

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
                this.formInput = this.form = {
                    名称: '',
                    类别: '',
                    条码号: '',
                    证书号: '',
                    状态: ''
                };
            }, columnCellClass (rowIndex, columnName, rowData) {
                if (rowData.货号)
                if (rowData.货号[0] === 'w'||rowData.货号[0] === 'W') {
                    return 'w-class';
                }

            },
            search(){
                let that = this
                 Object.keys(this.formInput).map(function(key, index) {
                     that.$set(that.form,key , that.formInput[key].toUpperCase());
                });
            }
        }
    };
</script>
<style>
    .card {
        height: 100%;
        margin-top: -15px;
    }

    .search-button {
        position: fixed;
        right: 30px
    }

    .w-class{
        background-color: #f60;
        color:#fff;
    }
</style>
