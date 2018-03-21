<template> <div><Form ref="form" :model="form" inline>
    <FormItem prop="名称">
        <Input placeholder="名称" type="text" v-model="form.名称"></Input>
    </FormItem>
    <FormItem>
        <Button type="primary" @click="resetSearch">重置</Button>
    </FormItem>
</Form>
    <Card class="card">
        <v-table v-if="show" highlight-row stripe class="table" border :columns="columns"
                 is-vertical-resize
                 style="width:100%"
                 is-horizontal-resize
                 :vertical-resize-offset='40'
                 column-width-drag
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 odd-bg-color="#fafafa"
               :table-data="data"></v-table>
    </Card>
</div>
</template>
<script>
    import {mapGetters, mapState} from 'vuex';

    export default {
        name:'ib-pj',
        data: function () {
            return {
                form:{
                    名称:'',
                }
            };
        },
        computed: {
            ...mapGetters({columns: 'pjColumns'}),
            ...mapState({
                show: state => state.app.show
            }),data () {
                return this.$store.state.zb.pj.filter((item) => {
                    return item.名称.indexOf(this.form.名称) > -1 || item.名称 === item._id;
                });
            }
        },
        mounted () {
        },
        created () {
            this.$store.dispatch('get', {path: 'pj'}).then(
                () => this.$Message.success('加载数据成功'),
                () => this.$Message.error('加载数据失败')
            );
        },
        methods: {
            resetSearch () {
                this.form =  {
                    名称: '',
                };
            }
        }
    };
</script>
<style scoped>
    .card {
        height: 100%;
        width: auto;
        margin-top: -15px;
    }

    .search-button {
        position: fixed;
        right: 30px
    }
</style>
