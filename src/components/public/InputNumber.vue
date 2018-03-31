<template>
  <div class="input-number" @click.stop="">
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
      operator: ''
    }
  },
  computed: {
    number () {
      return this.count;
    }
  },
  methods: {
    minus () {
      this.operator = 'minus',
      this.changeNumber();
    },
    plus () {
      this.operator = 'plus'
      this.changeNumber();
    },
    changeNumber () {
      this.$emit('changeNumberEvent', this.operator);
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
