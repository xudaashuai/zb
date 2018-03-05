<template>
    <Card class="card">
        <Tabs value="全部">
            <TabPane label="全部" name="全部">
                <v-table
                        is-vertical-resize
                        style="width:100%"
                        is-horizontal-resize
                        :vertical-resize-offset='40'
                        column-width-drag
                        row-hover-color="#eee"
                        row-click-color="#edf7ff"
                        odd-bg-color="#fafafa"
                        :columns="spColumns"
                        :table-data="allData"></v-table>
            </TabPane>
            <TabPane v-for="type in mType" :label="type" :key="type" :name="type">
                <v-table is-vertical-resize
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
</template>
<script>
    import {mapGetters, mapState} from 'vuex';

    export default {
        data: function () {
            return {
            };
        },
        computed: {
            ...mapGetters(['spColumns']),
            ...mapState({
                mType: state => state.zb.mType
            }),
            data: function () {
                let t = {};
                for (let i = 0; i < this.$store.state.zb.mType.length; i++) {
                    t[this.$store.state.zb.mType[i]] = this.$store.getters.typeData(this.$store.state.zb.mType[i]);
                }
                return t;
            },
            ...mapState({
                allData: (state) => state.zb.sp
            })
        },
        mounted () {
        },
        created () {
            this.$store.dispatch('get', {path: 'sp'}).then(
                () => this.$Message.success('加载数据成功'),
                () => this.$Message.error('加载数据失败')
            );
        }
    };
</script>
<style scoped>
    .card {
        height: 100%;
    }

    .search-button {
        position: fixed;
        right: 30px
    }
</style>
