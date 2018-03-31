<template>
  <nav class="app-nav">
    <router-link to="/Home" class="nav-item">
      <div class="homeImg" :class="homeImgOn" @click="changeNavImg"></div>
    </router-link>
    <router-link to="/Cart" class="nav-item">
      <div class="cartImg" :class="cartImgOn" @click="changeNavImg">
        <span class="cart-counter" v-show="cartCounter > 0">{{ cartCounter }}</span>
      </div>
    </router-link>
    <router-link to="/Profile" class="nav-item">
      <div class="profileImg" :class="profileImgOn" @click="changeNavImg"></div>
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
      allBtnImgUrl: [
      './static/icon/home.png',
      './static/icon/cart.png',
      './static/icon/profile.png',
      './static/icon/home-on.png',
      './static/icon/cart-on.png',
      './static/icon/profile-on.png',
      ],
      imgLoadCount: 0
    }
  },
  methods: {
    //点击更新菜单背景
    changeNavImg (ev) {
      let claName = ev.target.className;
      if (claName.includes('home')) {
        this.homeImgOn = 'homeImgOn';
        this.cartImgOn = '';
        this.profileImgOn = '';
      } else if(claName.includes('cart')){
        this.homeImgOn = '';
        this.cartImgOn = 'cartImgOn';
        this.profileImgOn = '';
      } else if(claName.includes('profile')) {
        this.homeImgOn = '';
        this.cartImgOn = '';
        this.profileImgOn = 'profileImgOn';
      } else {
        this.homeImgOn = '';
        this.cartImgOn = '';
        this.profileImgOn = '';
      }
    },
    //直接跳转时，更新背景
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
    },
    createImgPromise(url){
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        console.log('开始请求');
        img.onload = () => {
          console.log('请求成功');
          resolve(img)
        }
      })
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
    let arr = [];
    let that = this;
    this.allBtnImgUrl.forEach((url, i)=> {
      arr[i] = this.createImgPromise(url);
    });

    Promise.all(arr).then(() =>{
      that.autoChangeCurrentImg();
    })
  },
  updated () {
    this.autoChangeCurrentImg();
  }
}
</script>

<style scoped lang="scss">
  .app-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #eee;
    font-size: 0;
    background-color: #fff;
    height: 60px;
    z-index: 999;
  }
  .nav-item{
    display: inline-block;
    width: 33.33%;
    height: 60px;
  }
  .nav-item>div{
    height: 100%;
  }
  .homeImg{
    height: 100%;
    background-image: url('../../static/icon/home.png');
    background-repeat: no-repeat;
    background-position: center 50%;
    background-size: 45px;
  }
  .homeImgOn{
    background-image: url('../../static/icon/home-on.png');
  }
  .cartImg{
    height: 100%;
    background-image: url('../../static/icon/cart.png');
    background-repeat: no-repeat;
    background-position: center 50%;
    background-size: 45px;
  }
  .cartImgOn{
    background-image: url('../../static/icon/cart-on.png');
  }
  .profileImg{
    height: 100%;
    background-image: url('../../static/icon/profile.png');
    background-repeat: no-repeat;
    background-position: center 50%;
    background-size: 45px;
  }
  .profileImgOn{
    background-image: url('../../static/icon/profile-on.png');
  }

  .cart-counter{
    position: absolute;
    width: 25px;
    height: 20px;
    top: 5px;
    line-height: 20px;
    border-radius: 40%;
    background-color: #ff65af;
    color: #fff;
    font-size: 10px;
  }

</style>
