<template>
  <div class="one-commodity" @click="goToDetailsPage">
    <div class="left" v-loading="loadingImg">
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

export default {
  name: 'one-commodity',
  props: ['itemId','imgUrl', 'title', 'content', 'price', 'count'],
  data () {
    return {
      loadingImg: true,
      oneCommodity: {
        id: this.itemId,
        img: this.imgUrl,
        title: this.title,
        content: this.content,
        price: this.price,
        count: this.count,
        isInCart: false,
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
      this.$store.commit('addGoodsToCart', this.oneCommodity);
    },
    getOperator (op) {
      let id = this.oneCommodity.id;
      if (op === 'plus') {
        this.$store.commit('addGoods', id);
      } else {
        let count = this.$store.state.cartGoods.filter(val => {
          return val.id === id;
        })[0].count;
        if (count === 1) {
          this.$store.commit('deleteGoodsFromCart', id);
        } else {
          this.$store.commit('reduceGoods', id);
        }
      }
    },
    goToDetailsPage () {
      this.$router.push({
        path: '/DetailsPage',
        query: this.oneCommodity
      });
      //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
      this.$store.state.cartCounter++;
      this.$store.state.cartCounter--;
    },
  },
  created () {
    let img = new Image();
    img.src = this.imgUrl;
    img.onload = () => {
      this.loadingImg = false;
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.one-commodity{
  height: $OneCommodityWrapHeight;
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
    height: $OneCommodityWrapHeight600;
  }
}
@media screen and (min-width: 800px) {
  .one-commodity{
    height: $OneCommodityWrapHeight800;
  }
}
  @media screen and (min-width: 1025px) {
  .one-commodity{
    height: $OneCommodityWrapHeight1025;
  }
}
</style>