<template>
  <Card class="card">
    <Tabs value="全部">
      <TabPane label="全部" name="全部">
        <Table highlight-row stripe :height="height" class="table" border :columns="zbColumns"
               :data="allData"></Table>
      </TabPane>
      <TabPane v-for="type in mType" :label="type" :key="type" :name="type">
        <Table highlight-row stripe :height="height" class="table" border :columns="zbColumns"
               :data="data[type]"></Table>
      </TabPane>
    </Tabs>
  </Card>
</template>
<script>
  import {mapGetters, mapState} from 'vuex'

  export default {
    data: function () {
      return {
        height: 10
      }
    },
    computed: {
      ...mapGetters(['zbColumns']),
      ...mapState({
        mType: state => state.zb.mType,
      }),
      data: function () {
        let t = {}
        for (let i = 0; i < this.$store.state.zb.mType.length; i++) {
          t[this.$store.state.zb.mType[i]] = this.$store.getters.typeData(this.$store.state.zb.mType[i])
        }
        return t;
      },
      ...mapState({
        allData: (state) => state.zb.zbData
      }),
    },
    mounted() {
      this.$nextTick(() =>
          this.height = this.$el.parentElement.parentElement.clientHeight - 107)
    },
  }
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
