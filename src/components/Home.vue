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
            :imgUrl="item.url"
            :title="item.title"
            :content="item.content"
            :price="item.price"
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
      goods:[
        {id:1, url:require('../assets/imgs/1.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:2, url:require('../assets/imgs/2.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:3, url:require('../assets/imgs/3.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:4, url:require('../assets/imgs/4.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:5, url:require('../assets/imgs/5.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:6, url:require('../assets/imgs/6.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:7, url:require('../assets/imgs/7.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:8, url:require('../assets/imgs/8.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:1, url:require('../assets/imgs/1.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:2, url:require('../assets/imgs/2.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:3, url:require('../assets/imgs/3.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:4, url:require('../assets/imgs/4.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:5, url:require('../assets/imgs/5.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:6, url:require('../assets/imgs/6.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:7, url:require('../assets/imgs/7.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
        {id:8, url:require('../assets/imgs/8.jpg'),title:'这是一只大苹果',content:'又香又甜又好吃',price:18 },
      ],
    }
  },
  components: {
    OneCommodity: OneCommodity,
    HomeHeader: HomeHeader,
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
