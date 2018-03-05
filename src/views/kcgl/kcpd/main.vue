<template>
    <Row gutter="20">
        <Modal v-model="modal">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="information-circled"></Icon>
                <span>完成盘点</span>
            </p>
            <div style="">
                <Form :model="form" :label-width="120">
                    <FormItem label="盘点时间">
                        <DatePicker v-model="form.盘点时间" disabled></DatePicker>
                    </FormItem>
                    <FormItem label="总盘点数目">
                        <Input type="number" v-model="form.总盘点数目" placeholder="" disabled></Input>
                    </FormItem>
                    <FormItem label="盘点成功数目">
                        <Input type="number" v-model="form.盘点成功数目" placeholder="" disabled></Input>
                    </FormItem>
                    <FormItem label="缺失数目">
                        <Input type="number" v-model="form.缺失数目" placeholder="" disabled></Input>
                    </FormItem>
                    <FormItem label="缺失项目">
                        <Select v-model="缺失项目" multiple>
                            <Option v-for="item in form.缺失项目" :value="item.条码号" :key="item.条码号">{{ item.名称 }}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="盘点人" required>
                        <Input type="text" v-model="form.盘点人" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="备注">
                        <Input type="textarea" v-model="form.备注" placeholder=""></Input>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer">
                <Button type="primary" size="large" long @click="ok">确定</Button>
            </div>
        </Modal>
        <Col span="16" style="padding-bottom: 10px">
        <Form @submit.native.prevent="sm">
            <Input type="text" v-model="m" placeholder="输入条码号或使用扫码枪扫码"></Input></Form>
        </Col>
        <Col span="4">
        <Button type="info" long @click="finish">盘点结束</Button>
        </Col>
        <Col span="4">
        <Button type="error" long @click="restart">重新盘点</Button>
        </Col>
        <Col span="12">
        <Card>
            <p slot="title">
                已盘点货品
            </p>
            <v-table
                    is-vertical-resize
                    style="width:100%"
                    is-horizontal-resize
                    :vertical-resize-offset='40'
                    column-width-drag
                    row-hover-color="#eee"
                    row-click-color="#edf7ff"
                    odd-bg-color="#fafafa"
                    :columns="columns"
                    :table-data="okData"></v-table>
        </Card>
        </Col>
        <Col span="12">
        <Card>
            <p slot="title">
                未盘点货品
            </p>
            <v-table
                    is-vertical-resize
                    style="width:100%"
                    is-horizontal-resize
                    :vertical-resize-offset='40'
                    column-width-drag
                    row-hover-color="#eee"
                    row-click-color="#edf7ff"
                    odd-bg-color="#fafafa"
                    :columns="columns"
                    :table-data="data"></v-table>
        </Card>
        </Col>
    </Row>
</template>

<script>
    import _ from 'underscore';
    import {mapGetters, mapState} from 'vuex';

    export default {
        name: 'main',
        data () {
            return {
                form: {
                    path: 'pd',
                    盘点时间: new Date(),
                    总盘点数目: 0,
                    盘点成功数目: 0,
                    缺失数目: 0,
                    缺失项目: [],
                    盘点人: '',
                    备注: '',
                    缺失项目条码号: ''
                },
                缺失项目: [],
                modal: false,
                m: '',
                columns: [],
                data: [],
                okData: []
            };
        },
        created () {
            this.columns = this.$store.getters.spColumns;
            this.data = this.$store.state.zb.sp.filter((item) => item.状态==='在库');
        },
        methods: {
            sm () {
                let target = _.findWhere(this.data, {'条码号': this.m});
                if (target) {
                    this.$Message.success(target.名称 + '盘点成功');
                    this.data.splice(this.data.indexOf(target), 1);
                    this.okData.push(target);
                    this.m = '';
                } else {
                    let target2 = _.findWhere(this.okData, {'条码号': this.m});
                    if (target2) {
                        this.$Message.info(target2.名称 + '已被盘点');
                    } else {
                        this.$Message.error('条码号不存在');
                    }
                }
            },
            finish () {
                this.form.缺失项目 = [];
                for (let item of this.data) {
                    this.form.缺失项目.push(item);
                }
                this.form.总盘点数目 = this.data.length + this.okData.length;
                this.form.缺失数目 = this.data.length;
                this.form.盘点成功数目 = this.okData.length;
                this.缺失项目 = _.map(this.data, function (item) {
                    return item.条码号;
                });
                this.modal = true;
            },
            ok () {
                this.$store.dispatch('add', this.form).then((res) => {
                    console.log(res);
                    this.$Message.success('添加盘点成功!');
                    this.modal = false;
                }, (err) => {
                    this.$Message.error(err);
                });
            },
            restart () {
                this.data = this.$store.state.zb.sp;
                this.okData = [];
            }
        }
    };
</script>

<style scoped>

</style>
