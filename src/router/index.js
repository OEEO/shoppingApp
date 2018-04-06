import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import OrderForm from '@/components/OrderForm'
import Login from '@/components/Login'
import DetailsPage from '@/components/DetailsPage'
import Profile from '@/components/Profile'
import EditAddressPage from '@/components/EditAddressPage'
import AddNewAddress from '@/components/AddNewAddress'
import ModifyAddress from '@/components/ModifyAddress'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home,
      meta: {index: 1}
    },
    {
      path: '/Cart',
      component: Cart
    },
    {
      path: '/OrderForm',
      component: OrderForm
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Profile',
      component: Profile,
      children: [
        {
          path: 'EditAddressPage',
          component: EditAddressPage
        },
        {
          path: 'AddNewAddress',
          component: AddNewAddress
        },
        {
          path: 'ModifyAddress',
          component: ModifyAddress
        }
      ]
    },
    {
      path: '/DetailsPage',
      component: DetailsPage
    },
  ]
})
