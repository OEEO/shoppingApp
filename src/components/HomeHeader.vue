<template>
  <header class="home-header">
    <div class="search">
      <div v-if="!isInput">
        <span>一小时达</span>
        <i class="el-icon-search" @click="isInput = !isInput"></i>
      </div>

      <el-input
        v-else
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="inputText">
      </el-input>
    </div>
    <div class="tap-menu">
      <el-tabs :tab-position="'top'" type="border-card" style="height: 39px;">
        <el-tab-pane label="水果"></el-tab-pane>
        <el-tab-pane label="蔬菜"></el-tab-pane>
        <el-tab-pane label="肉蛋"></el-tab-pane>
        <el-tab-pane label="速冻"></el-tab-pane>
        <el-tab-pane label="酒饮"></el-tab-pane>
        <el-tab-pane label="乳品"></el-tab-pane>
        <el-tab-pane label="零食"></el-tab-pane>
      </el-tabs>
    </div>
  </header>
</template>

<script>
export default {
  name: 'home-header',
  data () {
    return {
      isInput:false,
      inputText: '',
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .home-header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding-top: 10px;
    background-color: #fff;
    z-index: 999;
  }
  .search .el-input{
    width: 80%;
  }
  .search{
    position: relative;
  }
  .search>div{
    height: 45px;
    line-height: 45px;
  }
  .tap-menu{
    margin-top: 2px;
  }
  .el-icon-search{
    position: absolute;
    right: 10px;
    top: 5px;
  }

</style>