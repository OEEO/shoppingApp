<template>
  <div class="home">
    <home-header></home-header>
    <div class="home-main">
        <div class="block">
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
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
      <p>没有更多商品啦，敬请期待!!!</p>
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
      // goods:[
      //     {'id':1, 'img': require('../assets/imgs/goods/水果.png'), 'title': '这是水果标题', 'content': '这是水果介绍', 'price': 18 },
      //     {'id':2, 'img': require('../assets/imgs/goods/蔬菜.png'), 'title': '这是蔬菜标题', 'content': '这是蔬菜介绍', 'price': 20 },
      //     {'id':3, 'img': require('../assets/imgs/goods/肉蛋.png'), 'title': '这是肉蛋标题', 'content': '这是肉蛋介绍', 'price': 10 },
      //     {'id':4, 'img': require('../assets/imgs/goods/速冻.png'), 'title': '这是速冻标题', 'content': '这是速冻介绍', 'price': 50 },
      //     {'id':5, 'img': require('../assets/imgs/goods/酒饮.png'), 'title': '这是酒饮标题', 'content': '这是酒饮介绍', 'price': 100 },
      //     {'id':6, 'img': require('../assets/imgs/goods/乳品.png'), 'title': '这是乳品标题', 'content': '这是乳品介绍', 'price': 55 },
      //     {'id':7, 'img': require('../assets/imgs/goods/零食.png'), 'title': '这是零食标题', 'content': '这是零食介绍', 'price': 5 }
      // ]
    }
  },
  components: {
    OneCommodity: OneCommodity,
    HomeHeader: HomeHeader,
  },
  mounted () {
    this.axios.get('http://localhost:8080/static/data/goods.json').then(res => {
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
}
</style>
