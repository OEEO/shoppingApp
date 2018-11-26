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

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <p>这是手机端应用，用手机微信，或浏览器扫码打开，或chrome浏览器手机调试模式下打开效果更佳哦。</p>
      <img src="../../static/url.png" height="280" width="280">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import OneCommodity from './HomeOneCommodity.vue'
import HomeHeader from './HomeHeader.vue'

export default {
  name: 'home',
  data () {
    var UA = navigator.userAgent;
    var ipad = !!(UA.match(/(iPad).*OS\s([\d_]+)/)),
        isIphone = !!(!ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/)),
        isAndroid = !!(UA.match(/(Android)\s+([\d.]+)/)),
        isPC = !(isIphone || isAndroid || ipad);
    return {
      goods:[],
      dialogVisible: isPC
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
      this.axios.get('http://127.0.0.1:7777/static/data/goods.json')
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
