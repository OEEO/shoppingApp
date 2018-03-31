<template>
  <div class="one-commodity" @click="goToDetailsPage">
    <div class="left">
      <img :src="imgUrl">
    </div>
    <div class="right">
      <div class="text">
        <h3 class="title">{{ title }}</h3>
        <p class="content">{{ content }}</p>
        <div>
          <span class="price"> ￥
            <span class="price-number">{{ price }}</span>
          </span>
        </div>
      </div>
      <div class="cart-btn">
        <el-button icon="el-icon-goods" type="danger" @click.stop.native="addGoodsToCart" v-show="counter === 0" circle> </el-button>
        <my-input-number :count="counter" v-show="counter > 0" @changeNumberEvent="getOperator"></my-input-number>
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
        count: this.count,
      }
    }
  },
  computed: {
    counter () {
      let that = this;
      let cartGoods = this.$store.state.cartGoods;
      let result = 0;
      cartGoods.some(good => {
        if (good.id === that.itemId) {
          result = good.count;
        }
      });
      return result;
    }
  },
  methods: {
    addGoodsToCart () {
      this.count = 1;
      this.oneCommodity.count++;
      this.$store.state.cartGoods.push(this.oneCommodity);
      this.$store.state.cartCounter++;
    },
    getOperator (op) {
      let good = null;
      this.$store.state.cartGoods.some(obj => {
        if (obj.id === this.itemId) {
          good = obj;
        }
      })
      let cartGoods = this.$store.state.cartGoods;
      if (op === 'plus') {
        this.$store.state.cartCounter++;
        good.count++;
      } else {
        this.$store.state.cartCounter--;
        good.count--;
        if (good.count === 0) {
          this.$store.state.cartGoods = cartGoods.filter(obj => {
            return obj.id !== good.id;
          })
        }
      }
    },
    goToDetailsPage () {
      this.$router.push({
        path: '/DetailsPage',
        query: this.oneCommodity
      })
    }
  },
  components: {
    MyInputNumber: InputNumber
  }
}

</script>

<style lang="scss" scoped>
  @import "../assets/css/variable.scss";
  .one-commodity{
    height: 130px;
    width: 100%;
    font-size: 0;
    border-bottom: 1px solid #e4e7ed;
    background-color: #fff;
  }
  .one-commodity>div{
    font-size: $GobalFontSize;
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
    text-align: left;
    padding-left: 10px;
    .text{
      position: absolute;
      line-height: 30px;
      top: 50%;
      transform: translateY(-50%);
    }
    .title{

    }
    .price {

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