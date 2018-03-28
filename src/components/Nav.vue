<template>
  <nav class="app-nav">
    <router-link to="/Home" class="nav-item">
      <div class="homeImg" :class="homeImgOn" @click="changeNavImg"></div>
    </router-link>
    <router-link to="/Cart" class="nav-item">
      <div class="cartImg" :class="cartImgOn" @click="changeNavImg"></div>
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
      homeImgOn: 'homeImgOn',
      cartImgOn: '',
      profileImgOn: ''
    }
  },
  methods: {
    getText () {
      this.axios.get('http://localhost:8080/static/data/goods.txt')
        .then(res => {
          alert(res.data)
        })
        .catch(error => {
          console.log(error.status)
        })
    },
    changeNavImg (ev) {
      let claName = ev.target.className;
      if (claName.indexOf('home') !== -1) {
        this.homeImgOn = 'homeImgOn';
        this.cartImgOn = '';
        this.profileImgOn = '';
      } else if(claName.indexOf('cart') !== -1){
        this.homeImgOn = '';
        this.cartImgOn = 'cartImgOn';
        this.profileImgOn = '';
      } else {
        this.homeImgOn = '';
        this.cartImgOn = '';
        this.profileImgOn = 'profileImgOn';
      }
    },
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
  }
  .nav-item{
    display: inline-block;
    width: 33.33%;
    height: 60px;
    color: #444;
    text-decoration: none;
  }
  .nav-item>div{
    height: 100%;
  }
  .homeImg{
    height: 100%;
    background-image: url('./../assets/icon/home.png');
    background-repeat: no-repeat;
    background-position: center 50%;
    background-size: 50px;
  }
  .homeImgOn{
    background-image: url('./../assets/icon/home-on.png');
  }
  .cartImg{
    height: 100%;
    background-image: url('./../assets/icon/cart.png');
    background-repeat: no-repeat;
    background-position: center 50%;
    background-size: 40px;
  }
  .cartImgOn{
    background-image: url('./../assets/icon/cart-on.png');
  }
  .profileImg{
    height: 100%;
    background-image: url('./../assets/icon/profile.png');
    background-repeat: no-repeat;
    background-position: center 50%;
    background-size: 40px;
  }
  .profileImgOn{
    background-image: url('./../assets/icon/profile-on.png');
  }

</style>
