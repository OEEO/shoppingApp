import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Profile from '@/components/Profile'
import DetailsPage from '@/components/DetailsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Cart',
      component: Cart
    },
    {
      path: '/Profile',
      component: Profile
    },
    {
      path: '/DetailsPage',
      component: DetailsPage
    }
  ]
})
