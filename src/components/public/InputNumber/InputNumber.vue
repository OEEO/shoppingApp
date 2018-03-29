<template>
  <div class="input-number">
    <button @click="minus">-减</button><span class="inputText">{{ counter }}</span><button @click="plus">+加</button>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data () {
    return {
      counter: 1
    }
  },
  methods: {
    minus () {
      this.counter--;
    },
    plus () {
      this.counter++;
    }
  }
}
</script>

<style scoped>
  .input-number{

  }
</style>
