<template>
  <div class="input-number" @click="stopPro">
    <i class="el-icon-remove-outline" @click="minus"></i>
    <span class="inputText">{{ number }}</span>
    <i class="el-icon-circle-plus" @click="plus"></i>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  props: ['count'],
  data () {
    return {
    }
  },
  computed: {
    number () {
      return this.count;
    }
  },
  methods: {
    minus (ev) {
      ev.stopPropagation();
      this.count--;
      this.$store.state.cartCounter--;
      this.changeNumber();
    },
    plus (ev) {
      ev.stopPropagation();
      this.count++;
      this.$store.state.cartCounter++;
      this.changeNumber();
    },
    changeNumber () {
      this.$emit('changeNumberEvent',this.number);
    },
    stopPro (ev) {
      ev.stopPropagation();
    }
  },
}
</script>

<style lang="scss" scoped>
  .input-number{
    display: inline-block;
    user-select: none;
    .inputText{
      display: inline-block;
      width: 20px;
      text-align: center;

    }
  }
</style>
