<template>
  <div class="profile">
    <div class="login" v-if="!isLogin">
      <el-input v-model="username" placeholder="请输入帐号"></el-input>
      <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
      <br>
      <el-button type="success" @click="isLogin = true">登录</el-button>
      <el-button>注册</el-button>
    </div>
    <div class="main" v-else>
      <header class="profile-header">
        当前用户：{{ username }}
      </header>
      <main class="profile-body"></main>
      <footer class="profile-footer"></footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      isLogin: false,
      username: 'abcde',
      password: '123456',
    }
  }
}
</script>

<style lang="scss" scoped>
  .profile{
    height: 100%;
    position: relative;
  }
  .login{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .el-input{
      width: 80%;
      margin-bottom: 10px;
    }
  }
</style>
