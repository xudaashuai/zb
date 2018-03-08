<template>
    <Card>
        <v-table highlight-row stripe class="table" border :columns="columns"
                 is-vertical-resize
                 style="width:100%"
                 is-horizontal-resize
                 :vertical-resize-offset='40'
                 column-width-drag
                 row-hover-color="#eee"
                 row-click-color="#edf7ff"
                 odd-bg-color="#fafafa"
                 :filter-method="filterMethod"
                 :table-data="data"></v-table>
    </Card>
</template>

<script>
    import {mapGetters, mapState} from 'vuex';

    export default {
        name: 'kcrz',
        data: function () {
            return {
                data: []
            };
        },
        computed: {
            ...mapGetters({columns: 'rzColumns'}),
        },
        mounted () {
        },
        created () {
            this.data = this.$store.state.zb.rz.slice();
            this.$store.dispatch('get', {path: 'rz'}).then(
                () => {
                    this.data = this.$store.state.zb.rz.slice();
                    this.$Message.success('加载数据成功');
                }, () => this.$Message.error('加载数据失败')
            );
        },
        methods: {
            filterMethod (filters) {
                console.log(filters)
                let tableData = this.$store.state.zb.rz.slice();
                for (let type of ['类型']) {
                    if (Array.isArray(filters[type])) {
                        tableData = tableData.filter(item => filters[type].indexOf(item[type]) > -1);
                    }
                }
                this.data = tableData;
            },
        }
    };
</script>

<style scoped>

</style>
