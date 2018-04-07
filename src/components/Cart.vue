<template>
  <div class="cart">
      <header class="cart-header">
        <h3>我的购物车</h3>
      </header>
      <main class="cart-body" v-if="cartGoods.length > 0">
        <div class="wrap">
          <ul class="goods-wrap">
            <li v-for="item in cartGoods" class="cartGoodsItem">
              <cart-one-item
                :itemId="item.id"
                :imgUrl="item.img"
                :title="item.title"
                :content="item.content"
                :price="item.price"
                :count="item.count"
               ></cart-one-item>
            </li>
          </ul>
          <div class="price-wrap">
            <div class="amount">商品总价：
              <span class="float-right">￥{{ amount }}</span>
            </div>
            <div class="red-packet">
              <div>红包：
                <el-select v-model="redPacket" :placeholder="redPacketPlaceholder">
                  <el-option
                    v-for="item in redPackets"
                    :key="item.id"
                    :label="item.label"
                    :value="item.money"
                    :disabled="isRedPacketDisabled(item.limit)">
                  </el-option>
                </el-select>
                <span class="float-right" v-show="redPacket">-￥{{ redPacket }}</span>
              </div>
            </div>
            <div class="pay">
              <div>商品实付：
                <span class="float-right">￥{{ amount - redPacket  }}</span>
              </div>
              <div>
                <span>运费（实付满49免邮）：</span>
                <span class="float-right">
                  <span class="postage" v-show="needPostage">￥{{ postage }}</span>
                  <span class="postage" v-show="!needPostage">免邮</span>
                </span>
              </div>
              <div>
                <span class="text-left">合计：
                  <span class="float-right">￥{{ pay }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="cart-footer" v-show="cartGoods.length > 0">
        <div class="toPay">
            <el-button type="danger" class="text-right" @click="toOrderForm">去结算<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </div>
      </footer>
      <div v-if="cartGoods.length === 0" class="empty-wrap">
        你还没有添加任何商品哦~
      </div>
  </div>
</template>

<script>
import CartOneItem from './CartOneItem.vue'

export default {
  name: 'cart',
  components: {
    'cart-one-item': CartOneItem
  },
  data () {
    return {
      redPackets: [
        {id: 1, money: 10, limit: 70, label: '10元红包(满70可用)'},
        {id: 2, money: 20, limit: 100, label: '20元红包(满100可用)'},
        {id: 3, money: 30, limit: 150, label: '30元红包(满150可用)'}
      ],
      redPacket: '',
      redPacketPlaceholder: '无可用红包',
      postage: 6,
      needPostage: true
    }
  },
  computed: {
    cartGoods () {
      return this.$store.state.cartGoods;
    },
    //商品总价
    amount () {
      let cartGoods = this.$store.state.cartGoods;
      let result = 0;
      cartGoods.forEach(good =>{
        result += good.price * good.count;
      })
      return result;
    },
    //合计
    pay () {
      let result = this.amount - this.redPacket;
      if (result >= 49) {
        this.needPostage = false;
      } else {
        this.needPostage = true;
      }
      if (this.needPostage) {
        result += this.postage;
      }
      return result;
    },
  },
  methods: {
    isRedPacketDisabled (limit) {
      //某个红包是否可选
      if (this.amount < limit) {
        //没有可用红包时
        if (this.amount < this.redPackets[0].limit) {
          this.redPacket = '';
          this.redPacketPlaceholder = '无可用红包';
        }
        return true;
      } else {
        //有红包可用时，默认选择最大优惠
        this.redPackets.concat().reverse().some(val => {
          if (val.limit <= this.amount) {
             this.redPacket = val.money;
             return true;
           }
        })
        return false;
      }
    },
    toOrderForm () {
      let isLogin = this.$store.state.isLogin;
      if (!isLogin) {
        this.$router.push({
          path: '/Login'
        })
        return;
      }
      if (this.cartGoods.length > 0) {
        this.$router.push({
          path: '/OrderForm',
          query: {
            cartGoods: this.cartGoods,
            pay: this.pay
          }
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.float-right{
  float: right;
}
.cart{
  background-color: #fff;
  height: 100%;
}
.cart-header,
.cart-footer{
  background-color: #fff;
}
.cart-header{
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  height: $cartHeaderHeight;
  line-height: $cartHeaderHeight;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  z-index: 999;
}
.cart-body{
  padding-top: $cartHeaderHeight;
  padding-bottom: $NavHeight + $cartFooterHeight;
  background-color: #f5f5f5;
  .wrap{
    padding-top: 10px;
    .price-wrap{
      margin-top: 10px;
      background-color: #fff;
      padding: 15px 10px;
      text-align: left;
      line-height: 40px;
      >div{
        border-bottom: 1px solid #eee;
      }
      .red-packet .float-right{
        color: $mainRed;
      }
    }
  }
}
.cart-footer{
  position: fixed;
  width: 100%;
  height: $cartFooterHeight;
  line-height: $cartFooterHeight;
  bottom: $NavHeight;
  border-top: 1px solid #eee;
  left: 0;
  text-align: right;
}
.empty-wrap{
  position: absolute;
  height: 50px;
  width: 100%;
  top: 50%;
  margin-top: -25px;
}
ul{
  list-style: none;
}
.el-button--danger{
  background-color: $mainRed;
  border: none;
  border-radius: 0;
}
</style>
