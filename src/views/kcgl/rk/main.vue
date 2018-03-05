<template>
    <Card>
        <Tabs v-model="label">
            <TabPane label="商品" name="商品">
                <sp v-if="label==='商品'"></sp>
            </TabPane>
            <TabPane label="镶嵌类" name="镶嵌类">
                <xql v-if="label==='镶嵌类'"></xql>
            </TabPane>
            <TabPane label="设计款" name="设计款">
                <sjk v-if="label==='设计款'"></sjk>
            </TabPane>
            <TabPane label="配件" name="配件">
                <pj v-if="label==='配件'"></pj>
            </TabPane>
            <TabPane label="原料" name="原料">
                <yl v-if="label==='原料'"></yl>
            </TabPane>
        </Tabs>
    </Card>
</template>
<script>
    import {mapState} from 'vuex';
    import sp from './sp.vue';
    import xql from './xql.vue';
    import sjk from './sjk.vue';
    import pj from './pj.vue';
    import yl from './yl.vue';

    export default {
        data () {
            return {
                label:'商品'
            };
        },
        components: {
            sp: sp,
            xql:xql,
            sjk:sjk,
            pj:pj,
            yl:yl
        },
        methods: {
        }
    };
</script>
<style lang="less">

</style>
