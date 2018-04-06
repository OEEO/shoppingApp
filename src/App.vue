<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <app-nav></app-nav>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    'app-nav': Nav
  }
}
</script>

<style lang="scss">
// el-ui 的默认样式
@import "./assets/css/element-ui-modify.scss";
// 变量
@import "./assets/css/variable.scss";

#app {
  font-family: "Microsoft YaHei","微软雅黑",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $GobalFontSize;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
