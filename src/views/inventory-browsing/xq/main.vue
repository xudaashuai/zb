<template>
    <Card class="card">
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
        data: function () {
            return {
            };
        },
        computed: {
            ...mapGetters({columns: 'xqlColumns'}),
            ...mapState({
                data: (state) => state.zb.xql
            })
        },
        mounted () {
        },
        created () {
            this.$store.dispatch('get', {path: 'xql'}).then(
                () => this.$Message.success('加载数据成功'),
                () => this.$Message.error('加载数据失败')
            );
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
