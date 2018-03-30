<template>
  <div class="home">
    <home-header></home-header>
    <div class="home-main">
    <!-- 顶部轮播 -->
<!--         <div class="block">
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div> -->
      <ul class="goods">
        <li v-for="item in goods" class="one-com">
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
    </div>
    <div>
      <p class="no-more-goods">没有更多商品啦，敬请期待!!!</p>
    </div>
  </div>
</template>

<script>
import OneCommodity from './one-commodity.vue'
import HomeHeader from './HomeHeader.vue'

export default {
  name: 'home',
  data () {
    return {
      goods:[],
    }
  },
  computed: {

  },
  components: {
    OneCommodity: OneCommodity,
    HomeHeader: HomeHeader,
  },
  //本地测试：http://localhost:8080/static/data/goods.json
  //gitHub：/shoopingApp/static/data/github-goods.json
  mounted () {
    this.axios.get('/shoopingApp/static/data/github-goods.json').then(res => {
      this.goods = [...res.data];
    });
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  margin-bottom: 70px;
  margin-top: 110px;
}
.home-main{
  width: 100%;
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
/*顶部轮播
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}*/
</style>
