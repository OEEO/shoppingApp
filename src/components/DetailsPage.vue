<template>
  <div class="details-page">
    <h1>这是商品详情页</h1>
    <el-button type="primary">返回</el-button>
    <h2></h2>
  </div>
</template>

<script>
  export default {
    name: 'detail-page',
    data () {
      return {

      }
    },
    props: ['itemId','imgUrl', 'title', 'content', 'price', 'count'],
  }
</script>