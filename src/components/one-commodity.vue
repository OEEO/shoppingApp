<template>
  <div class="one-commodity">
    <div class="left">
      <img :src="imgUrl">
    </div>
    <div class="right">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
      <p> {{ price }} </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'one-commodity',
    data () {
      return {

      }
    },
    props: ['imgUrl', 'title', 'content', 'price']
  }

</script>

<style scoped>
  .one-commodity{
    height: 130px;
    width: 100%;
    font-size: 0;
    border-bottom: 1px solid #e4e7ed;
    line-height: 1;
  }
  .one-commodity>div{
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;
  }
  .left{
    width: 40%;
  }
  .left>img{
    width: 100%;
  }
  .right{
    height: 100%;
    width: 60%;
    line-height: 1em;
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