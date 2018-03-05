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
                 :table-data="data"></v-table>
    </Card>
</template>

<script>
    import {mapGetters, mapState} from 'vuex';

    export default {
        name: 'kcrz',
        data: function () {
            return {
            };
        },
        computed: {
            ...mapGetters({columns: 'rzColumns'}),
            ...mapState({
                data: (state) => state.zb.rz
            })
        },
        mounted () {
        },
        created () {
            this.$store.dispatch('get', {path: 'rz'}).then(
                () => this.$Message.success('加载数据成功'),
                () => this.$Message.error('加载数据失败')
            );
        }
    };
</script>

<style scoped>

</style>
