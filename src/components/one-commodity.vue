<template>
  <div class="one-commodity" @click="goToDetailsPage">
    <div class="left">
      <img :src="imgUrl">
    </div>
    <div class="right">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
      <div class="price-cart-wrap">
        <span class="price"> ￥
          <span class="price-number">{{ price }}</span>
        </span>
        <span class="cart-btn">
          <el-button icon="el-icon-goods" type="danger" @click.native="addGoodsToCart" v-show="count === 0" circle> </el-button>
          <my-input-number :count="count" v-show="count > 0" @changeNumberEvent="getCounter"></my-input-number>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import InputNumber from './public/InputNumber.vue';
export default {
  name: 'one-commodity',
  props: ['itemId','imgUrl', 'title', 'content', 'price', 'count'],
  data () {
    return {
      oneCommodity: {
        id: this.itemId,
        img: this.imgUrl,
        title: this.title,
        content: this.content,
        price: this.price,
        count: 0,
      }
    }
  },
  computed: {

  },
  methods: {
    addGoodsToCart (ev) {
      ev.stopPropagation()
      this.count = 1;
      this.oneCommodity.count++;
      this.$store.state.cartGoods.push(this.oneCommodity);
      this.$store.state.cartCounter++;
    },
    getCounter (num) {
      this.count = num;
      this.oneCommodity.count = num;
      let cartGoods = this.$store.state.cartGoods;
      let that = this;
      if (num === 0) {
        this.$store.state.cartGoods = cartGoods.filter(good => {
          return good.id !== that.itemId;
        })
      }
    },
    goToDetailsPage () {
      window.alert('商品详情页');
    }
  },
  components: {
    MyInputNumber: InputNumber
  }
}

</script>

<style lang="scss" scoped>
  .one-commodity{
    height: 130px;
    width: 100%;
    font-size: 0;
    border-bottom: 1px solid #e4e7ed;
  }
  .one-commodity>div{
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;
  }
  .left{
    width: 40%;
    height: 100%;
  }
  .left>img{
    height: 80%;
    transform: translateY(10%);
  }
  .right{
    box-sizing: border-box;
    position: relative;
    height: 100%;
    width: 60%;
    line-height: 1em;
    text-align: left;
    padding-left: 10px;
    .price-cart-wrap{
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      .price {
        position: absolute;
        left: 20px;
        bottom: 20px;
        .price-number{
          color: #ff65af;
          font-size: 18px;
          font-weight: 600;
        }
      }
      .cart-btn{
        position: absolute;
        bottom: 5px;
        right: 10px;
      }
      .el-button--danger{
        background-color: #ff65af;
        border-color: #ff65af;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .one-commodity{
      height: 200px;
    }
  }
  @media screen and (min-width: 800px) {
    .one-commodity{
      height: 250px;
    }
  }
    @media screen and (min-width: 1025px) {
    .one-commodity{
      height: 400px;
    }
  }
</style>