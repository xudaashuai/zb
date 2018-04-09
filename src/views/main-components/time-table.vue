<template>
    <div @click="handleChange" class="lock-screen-btn-con">
        <Tooltip content="日程表" placement="bottom">
            <Icon type="ios-calendar-outline" :size="23"></Icon>
        </Tooltip>
    </div>
</template>

<script>
    import util from '@/libs/util.js';
    export default {
        name: 'time-table',
        data () {
            return {
            };
        },
        methods:{
            handleChange(){
                util.openNewPage(this, 'time_index');
                this.$router.push({
                    name: 'time_index'
                });
            }
        }
    };
</script>

<style scoped>

</style>
