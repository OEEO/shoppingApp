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
// 修改对话框样式
@import "./assets/css/element-ui-modify/dialog-cart.scss";

#app {
  font-family: "Microsoft YaHei","微软雅黑",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
