<template>
  <header class="home-header">
    <h4 class="top-text"> 一小时达 </h4>
    <div class="tap-menu">
      <el-tabs :tab-position="'top'" type="border-card" style="height: 39px;" v-model="goodsType" @tab-click="changeGoodsType">
        <el-tab-pane label="全部" name="全部"></el-tab-pane>
        <el-tab-pane label="水果" name="水果"></el-tab-pane>
        <el-tab-pane label="蔬菜" name="蔬菜"></el-tab-pane>
        <el-tab-pane label="肉蛋" name="肉蛋"></el-tab-pane>
        <el-tab-pane label="速冻" name="速冻"></el-tab-pane>
        <el-tab-pane label="酒饮" name="酒饮"></el-tab-pane>
        <el-tab-pane label="乳品" name="乳品"></el-tab-pane>
        <el-tab-pane label="零食" name="零食"></el-tab-pane>
      </el-tabs>
    </div>
  </header>
</template>

<script>
export default {
  name: 'home-header',
  data () {
    return {
      kindToType: new Map([
        ['全部', 0],
        ['水果', 1],
        ['蔬菜', 2],
        ['肉蛋', 3],
        ['速冻', 4],
        ['酒饮', 5],
        ['乳品', 6],
        ['零食', 7]
      ]),
      goodsType: '全部'
    }
  },
  methods: {
    changeGoodsType () {
      this.$store.state.GoodsCurrentSelKind = this.kindToType.get(this.goodsType)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.home-header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  .top-text{
    height: $HomeHeaderHeight - 40px;
    line-height: $HomeHeaderHeight - 40px;
  }
  .tap-menu{
  }
}
</style>
