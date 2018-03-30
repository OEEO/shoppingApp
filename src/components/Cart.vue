<template>
  <div class="cart">
      <h4>我的购物车</h4>
      <ul class="goods">
        <li v-for="item in cartGoods" class="one-com">
          <one-commodity
            :itemId="item.id"
            :imgUrl="item.img"
            :title="item.title"
            :content="item.content"
            :price="item.price"
            :count="item.count"
           ></one-commodity>
        </li>
      </ul>
      <div class="amount">商品总价：{{ amount }}</div>
      <div class="red-packet">红包：{{ redPacket }}</div>
      <div class=""></div>
  </div>
</template>

<script>
import OneCommodity from './one-commodity.vue'

export default {
  name: 'cart',
  data () {
    return {
      redPacket:18
    }
  },
  computed: {
    cartGoods () {
      return this.$store.state.cartGoods;
    },
    amount () {
      let cartGoods = this.$store.state.cartGoods;
      let result = 0;
      cartGoods.forEach(good =>{
        result += good.price * good.count;
      })
      return result;
    }
  },
  components: {
    'one-commodity': OneCommodity
  }
}
</script>

<style lang="scss" scoped>
  .cartGoodsItem{
    width: 100%;
    height: 60px;
    background-color: red;
    margin-top: 5px;
  }
  ul{
    list-style: none;
  }
</style>
