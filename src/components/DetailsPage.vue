<template>
  <div class="details-page">
    <header class="dp-header">
      <router-link to="/">
        <el-button type="primary" icon="el-icon-back"></el-button>
      </router-link>
      <span>商品详情</span>
    </header>
    <main class="dp-main">
      <div>
        <img :src="goods.img">
      </div>
      <h4>{{ goods.title }}</h4>
      <p>{{ goods.content }}</p>
      <div>
        <span class="goods-price">{{ goods.price }}</span>
      </div>
    </main>
    <footer class="dp-footer">
      <span>
        <router-link to="/Cart">
          <span class="cart-counter" v-show="cartCounter > 0">{{ cartCounter }}</span>
          <el-button icon="el-icon-goods"></el-button>
        </router-link>
      </span>
      <el-button @click="addGoodsToCart">加入购物车</el-button>
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
      this.goods.count++;
      this.$store.state.cartCounter++;
      let isInCart = this.$store.state.cartGoods.some(obj => {
        return obj.id === this.goods.id;
      });
      console.log(this.goods);
      if (!isInCart) {
        this.$store.state.cartGoods.push(this.goods);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .details-page{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1001;
    background-color: #fff;
  }

  .dp-footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
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