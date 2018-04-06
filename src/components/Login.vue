<template>
  <div class="login-page">
    <header>
      <span class="toPrePage" @click="toPrePage">
          <i class="el-icon-arrow-left" ></i>
      </span>
      <h3>登录</h3>
    </header>
    <main>
      <div class="login">
        <el-form>
          <el-form-item>
            <el-input v-model="username" placeholder="请输入帐号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="login">登录</el-button>
            <el-button>注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '王小明',
      password: '123456',
    }
  },
  methods: {
    login () {
      this.$store.commit('login', this.username);
      this.$router.go(-1);
    },
    toPrePage () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page{
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  z-index: 1001;
  header{
    position: relative;
    height: 50px;
    line-height: 50px;
    .toPrePage i{
      position: absolute;
      left: 10px;
      font-size: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  main{
    width: 80%;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
  }

}

</style>
