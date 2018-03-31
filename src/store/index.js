import Vue from 'vue'
import Vuex from 'vuex'

import HomeStore from './modules/homeStore.js'
import CartStore from './modules/cartStore.js'
import ProfileStore from './modules/profileStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '', // 用户
    point: 0, // 积分
    cartGoods: [], // 添加到购物车中的商品
    cartCounter: 0, // 购物车物品总数
    GoodsCurrentSelKind: 0 // 表示全部商品
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    HomeStore,
    CartStore,
    ProfileStore
  }
})
