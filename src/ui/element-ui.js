import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Tabs,
  TabPane,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Carousel, //幻灯片
  CarouselItem, //幻灯片
  Badge, //购物车上方显示数量
  Select,
  Option,
  Dialog,
  Loading,
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Badge)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service

