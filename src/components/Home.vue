<template>
  <div class="home">
    <home-header></home-header>
    <div class="home-main">
      <transition-group enter-active-class="slideInRight">
        <ul class="goods animated" :key="animatedCurrentKey">
          <li v-for="item in goods" class="one-com" v-show="isCurrent(item.kind)">
            <one-commodity
              :itemId="item.id"
              :imgUrl="item.img"
              :title="item.title"
              :content="item.content"
              :price="item.price"
              :count="0"
             ></one-commodity>
          </li>
        </ul>
        <div :key="'0' + animatedCurrentKey">
          <p class="no-more-goods">没有更多商品啦，敬请期待!!!</p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import OneCommodity from './HomeOneCommodity.vue'
import HomeHeader from './HomeHeader.vue'

export default {
  name: 'home',
  data () {
    return {
      goods:[],
    }
  },
  computed: {
    animatedCurrentKey () {
      return this.$store.state.GoodsCurrentSelKind;
    }
  },
  methods: {
    //分类按钮点击时
    isCurrent (itemKind) {
      let currentKind = this.$store.state.GoodsCurrentSelKind;
      if (currentKind === 0) {
        //0表示全部商品
        return true;
      } else {
        return itemKind === currentKind;
      }
    },
  },
  components: {
    OneCommodity: OneCommodity,
    HomeHeader: HomeHeader,
  },
  //本地测试：http://localhost:8080/static/data/goods.json
  //gitHub：/shoppingApp/static/data/github-goods.json
  //阿里云：
  mounted () {
    this.axios.get('/shoppingApp/static/data/github-goods.json')
    .then(res => {
      this.goods = [...res.data];
    })
    .catch(() =>{
      this.axios.get('http://localhost:8080/static/data/goods.json')
      .then(res => {
        this.goods = [...res.data];
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.home{
  width: 100%;
  padding-bottom: $NavHeight + 5px;
  padding-top: $HomeHeaderHeight;
}
.home-main{
  width: 100%;
  overflow-x: hidden;
}
.goods{
  width: 100%;
  list-style: none;
  padding: 0;
}
.goods>li{
  width: 100%;
}
.no-more-goods{
  height: 40px;
  line-height: 40px;
}
.slideInRight{
  animation-duration: 0.25s;
}
</style>
