const InputNumberComponent = require('./InputNumber.vue')
const InputNumber = {
  install: function (Vue) {
    Vue.component('my-input-number', InputNumberComponent);
  }
}
module.exports = InputNumber
