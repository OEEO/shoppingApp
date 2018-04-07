<template>
  <nav class="app-nav">
    <router-link to="/Home" >
      <div class="nav-item" @click="changeNavImg">
        <div class="homeImg" :class="homeImgOn"></div>
      </div>
    </router-link>
    <router-link to="/Cart">
      <div class="nav-item" @click="changeNavImg">
        <div class="cartImg" :class="cartImgOn">
          <span class="cart-counter" v-show="cartCounter > 0">{{ cartCounter }}</span>
        </div>
      </div>
    </router-link>
    <router-link to="/Profile">
      <div class="nav-item" @click="changeNavImg">
        <div class="profileImg" :class="profileImgOn" ></div>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      homeImgOn: '',
      cartImgOn: '',
      profileImgOn: '',
      imgLoadCount: 0
    }
  },
  methods: {
    //点击导航菜单时，更新数据，触发 updated
    changeNavImg () {
        this.homeImgOn = '';
        this.cartImgOn = '';
        this.profileImgOn = '';
    },
    // 更新导航图标
    autoChangeCurrentImg() {
      let currentPath = this.currentPath;
      if (currentPath.includes('Home')) {
        this.homeImgOn = 'homeImgOn';
        this.cartImgOn = '';
        this.profileImgOn = '';
      } else if(currentPath.includes('Cart')){
        this.homeImgOn = '';
        this.cartImgOn = 'cartImgOn';
        this.profileImgOn = '';
      } else if(currentPath.includes('Profile')) {
        this.homeImgOn = '';
        this.cartImgOn = '';
        this.profileImgOn = 'profileImgOn';
      } else {
        this.homeImgOn = '';
        this.cartImgOn = '';
        this.profileImgOn = '';
      }
    }
  },
  computed: {
    cartCounter () {
      return this.$store.state.cartCounter;
    },
    currentPath () {
      return this.$route.path;
    },
  },
  mounted () {
    this.autoChangeCurrentImg();
  },
  updated () {
    this.autoChangeCurrentImg();
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.app-nav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #eee;
  font-size: 0;
  background-color: #fff;
  height: $NavHeight;
  z-index: 999;
}
.nav-item{
  height: 100%;
  display: inline-block;
  width: 33.33%;
  text-align: center;
}
.nav-item>div{
  display: inline-block;
  width: $NavHeight * 0.75;
  height: $NavHeight * 0.75;
  margin-top: $NavHeight * 0.125;
}
.homeImg{
  background-image: url('../../static/icon/home.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: $NavHeight * 0.75 * 3  $NavHeight * 0.75;
}
.homeImgOn{
  background-position: 100% 100%;
}
.cartImg{
  background-image: url('../../static/icon/cart.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: $NavHeight * 0.75 * 3  $NavHeight * 0.75;
}
.cartImgOn{
  background-position: 100% 100%;
}
.profileImg{
  background-image: url('../../static/icon/profile.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: $NavHeight * 0.75 * 3  $NavHeight * 0.75;
}
.profileImgOn{
  background-position: 100% 100%;
}

.cart-counter{
  position: absolute;
  width: 25px;
  height: 20px;
  top: 5px;
  line-height: 20px;
  border-radius: 40%;
  background-color: $mainRed;
  color: #fff;
  font-size: 10px;
}

</style>
