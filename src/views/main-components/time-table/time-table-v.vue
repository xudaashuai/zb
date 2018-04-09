<template>
    <full-calendar :events="fcEvents" locale="zh"></full-calendar>
</template>

<script>
    export default {
        name: 'time-table-v',
        data () {
            return {
            };
        },
        computed:{
          fcEvents(){
              return this.$store.state.zb.event
          }
        },
        methods:{
        },
    };
</script>

<style scoped>

</style>
