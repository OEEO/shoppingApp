<template>
  <div class="details-page" @click="updatedNavImg">
    <header class="dp-header">
      <span class="dp-header-toRoot">
        <router-link to="/">
          <i class="el-icon-arrow-left" ></i>
        </router-link>
      </span>
      <h3>商品详情</h3>
    </header>
    <main class="dp-main">
      <div class="goods-img-wrap">
        <img :src="goods.img">
      </div>
      <div class="goods-card">
        <h3>{{ goods.title }}</h3>
        <p>{{ goods.content }}</p>
        <div>
          <span>￥
            <span class="goods-price">{{ goods.price }}</span>
          </span>
        </div>
      </div>
      <div class="goods-intruction">
        <p v-for="item in 30">
          这是{{ goods.title }} 的商品详细介绍
        </p>
      </div>
    </main>
    <footer class="dp-footer">
      <span>
        <router-link to="/Cart">
          <span class="cart-counter" v-show="cartCounter > 0">{{ cartCounter }}</span>
          <el-button icon="el-icon-goods"></el-button>
        </router-link>
      </span>
      <el-button @click="addGoodsToCart" type="danger">加入购物车</el-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'detail-page',
  data () {
    return {
    }
  },
  computed: {
    cartCounter () {
      return this.$store.state.cartCounter;
    },
    goods () {
      return this.$route.query;
    }
  },
  methods: {
    addGoodsToCart () {
      this.$store.state.cartCounter++;
      let isInCart = this.$store.state.cartGoods.some(obj => {
        return obj.id === this.goods.id;
      });
      if (!isInCart) {
        this.goods.count++;
        this.$store.state.cartGoods.push(this.goods);
      } else {
        this.$store.state.cartGoods.some(obj => {
          if (obj.id === this.goods.id) {
            obj.count++;
          }
        })
      }
    },
    updatedNavImg () {
      this.$store.state.cartCounter++;
      this.$store.state.cartCounter--;
    }
  },
}
</script>

<style lang="scss" scoped>
  $mainRed: #ff65af;
  $dpFooterHeight:50px;
  $dpHeaderHeight:50px;
  .details-page{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1001;
    background-color: #fff;
  }
  .dp-header{
    position: relative;
    text-align: center;
    height: $dpHeaderHeight;
    border-bottom: 1px solid #eee;
    line-height: $dpHeaderHeight;
    .dp-header-toRoot{
      display: block;
      position: absolute;
      top: 0;
      left: 5px;
      .el-icon-arrow-left{
        font-size: 20px;
        font-weight: 800;
      }
    }
  }
  .dp-main{
    background-color: #fff;
    padding-bottom: $dpFooterHeight + 10px;
    .goods-card{
      border: 1px solid #eee;
      margin: 0 10px;
      line-height: 40px;
      .goods-price{
        color: $mainRed;
      }
    }
    .goods-intruction{
      margin-top: 10px;
      border: 1px solid #eee;
      padding: 10px;
      line-height: 20px;
    }
  }
  .dp-footer{
    width: 100%;
    height: $dpFooterHeight;
    line-height: $dpFooterHeight;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #eee;
    background-color: #fff;
    font-size: 0;
    .el-button--default,
    .el-button--danger{
      border: none;
      border-radius: 0;
      height: $dpFooterHeight;
    }
    .el-button--default{
      width: 20%;
    }
    .el-button--danger{
      width: 80%;
      background-color: $mainRed;
    }
    .cart-counter{
      position: absolute;
      width: 25px;
      height: 20px;
      top: 5px;
      left: 40px;
      line-height: 20px;
      border-radius: 40%;
      background-color: #ff65af;
      color: #fff;
      font-size: 10px;
    }
  }
</style>